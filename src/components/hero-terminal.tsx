import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TERMINAL_LINES = [
  "$ boot portfolio --mode=deterministic",
  "> loading systems...     ready",
  "> shipping thoughtful software",
];

export interface HeroTerminalProps {
  className?: string;
}

export function HeroTerminal({ className = "" }: HeroTerminalProps) {
  const reducedMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const activeLine = TERMINAL_LINES[lineIndex];

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(TERMINAL_LINES.length - 1);
      setCharacterIndex(TERMINAL_LINES[TERMINAL_LINES.length - 1].length);
      return;
    }

    const isLineComplete = characterIndex >= activeLine.length;
    const timeout = window.setTimeout(() => {
      if (isLineComplete) {
        setLineIndex((current) => (current + 1) % TERMINAL_LINES.length);
        setCharacterIndex(0);
      } else {
        setCharacterIndex((current) => current + 1);
      }
    }, isLineComplete ? 950 : 42);

    return () => window.clearTimeout(timeout);
  }, [activeLine, characterIndex, reducedMotion]);

  const visibleLines = reducedMotion
    ? TERMINAL_LINES
    : TERMINAL_LINES.slice(0, lineIndex).concat(activeLine.slice(0, characterIndex));

  return (
    <div className={`rounded-xl border border-white/15 bg-[#0A0A0A]/95 p-4 font-mono text-[11px] leading-6 text-[#D7D7D7] shadow-2xl backdrop-blur-sm ${className}`} aria-label="Animated terminal status">
      <div className="mb-2 flex items-center gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-white/40">terminal</span>
      </div>
      <div className="min-h-[4.5rem]">
        {visibleLines.map((line, index) => (
          <div key={`${line}-${index}`} className={index === 0 ? "text-[#FF7A45]" : "text-white/70"}>
            {line}
            {index === visibleLines.length - 1 && (
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block text-[#FF7A45]"
                animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                transition={reducedMotion ? undefined : { duration: 1, repeat: Infinity, ease: "linear" }}
              >
                ▌
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroTerminal;
