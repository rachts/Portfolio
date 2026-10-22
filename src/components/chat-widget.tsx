import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  isChatEndpointConfigured,
  sendChatMessage,
  type ChatMessage,
} from "../lib/chat";

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content: "Hi — I’m the portfolio assistant shell. Ask about the work, systems, or experience here.",
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const reducedMotion = useReducedMotion();
  const endpointConfigured = isChatEndpointConfigured();

  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  }, [messages, reducedMotion]);

  useEffect(() => () => controllerRef.current?.abort(), []);

  const closeChat = () => {
    setOpen(false);
    launcherRef.current?.focus();
  };

  const clearConversation = () => {
    setMessages(initialMessages);
    setDraft("");
    setError(null);
  };

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = draft.trim();
    if (!content || isSubmitting) return;

    setError(null);
    if (!endpointConfigured) {
      setError("Live AI is not configured yet. Set VITE_CHAT_ENDPOINT to enable replies.");
      return;
    }

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setDraft("");
    setIsSubmitting(true);
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const reply = await sendChatMessage(nextMessages, controller.signal);
      setMessages((current) => [...current, { role: "assistant", content: reply }]);
    } catch (caughtError) {
      if (caughtError instanceof Error && caughtError.name === "AbortError") return;
      setError(caughtError instanceof Error ? caughtError.message : "Something went wrong while contacting the chat endpoint.");
    } finally {
      controllerRef.current = null;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full border border-black bg-black px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-1 hover:bg-[#ff5a1f] hover:text-black"
        aria-expanded={open}
        aria-controls="portfolio-chat-panel"
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        <span className="flex h-2 w-2 rounded-full bg-[#ff5a1f]" aria-hidden="true" />
        <span>{open ? "Close" : "Ask"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.section
            id="portfolio-chat-panel"
            role="dialog"
            aria-modal="false"
            aria-labelledby="portfolio-chat-title"
            className="fixed bottom-[5.35rem] right-5 z-[70] flex w-[min(calc(100vw-2.5rem),24rem)] flex-col overflow-hidden rounded-2xl border border-[#D4D4D4] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.16)]"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex items-start justify-between gap-4 border-b border-[#E5E5E5] bg-[#FAFAFA] px-4 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737373]">Interface / Chat</p>
                <h2 id="portfolio-chat-title" className="mt-1 text-base font-medium text-black">Portfolio assistant</h2>
              </div>
              <button
                type="button"
                onClick={clearConversation}
                className="rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#737373] transition-colors hover:bg-[#F2F2F2] hover:text-black"
              >
                Clear
              </button>
            </header>

            <div className="border-b border-[#E5E5E5] px-4 py-3" role="status" aria-live="polite">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.11em] text-[#737373]">
                <span className={`h-2 w-2 rounded-full ${endpointConfigured ? "bg-[#ff5a1f]" : "bg-[#A3A3A3]"}`} aria-hidden="true" />
                {endpointConfigured ? "Endpoint configured · ready for requests" : "Live endpoint not configured"}
              </p>
              {!endpointConfigured && <p className="mt-1 text-xs leading-relaxed text-[#737373]">Set VITE_CHAT_ENDPOINT to enable live replies. No API key is stored in this site.</p>}
            </div>

            <div className="max-h-80 min-h-48 space-y-3 overflow-y-auto px-4 py-4" role="log" aria-label="Chat messages" aria-live="polite" aria-busy={isSubmitting}>
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed ${message.role === "user" ? "bg-black text-white" : "border border-[#E5E5E5] bg-[#FAFAFA] text-[#333333]"}`}>
                    {message.content}
                  </div>
                </div>
              ))}
              {isSubmitting && (
                <div className="flex justify-start" aria-label="Assistant is thinking">
                  <div className="rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] px-3 py-2 font-mono text-xs text-[#737373]">Sending<span className="animate-pulse">...</span></div>
                </div>
              )}
              <div ref={messagesEndRef} aria-hidden="true" />
            </div>

            <div className="border-t border-[#E5E5E5] p-3">
              {error && <p className="mb-2 text-xs leading-relaxed text-[#B42318]" role="alert">{error}</p>}
              <form onSubmit={submitMessage} className="flex items-center gap-2">
                <label htmlFor="portfolio-chat-input" className="sr-only">Message the portfolio assistant</label>
                <input
                  ref={inputRef}
                  id="portfolio-chat-input"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask about the portfolio..."
                  className="min-w-0 flex-1 rounded-lg border border-[#D4D4D4] bg-white px-3 py-2.5 text-sm text-black outline-none placeholder:text-[#A3A3A3] focus:border-black"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !draft.trim()}
                  className="rounded-lg bg-black px-3 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#ff5a1f] hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isSubmitting ? "..." : "Send"}
                </button>
              </form>
              <button type="button" onClick={closeChat} className="mt-2 w-full text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#A3A3A3] hover:text-black">Close panel</button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatWidget;
