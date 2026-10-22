export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface ChatResponsePayload {
  reply?: unknown;
  error?: unknown;
}

const getChatEndpoint = () => {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
  const configuredEndpoint = env?.VITE_CHAT_ENDPOINT?.trim();
  return configuredEndpoint || (env?.PROD ? "/api/chat" : "");
};

export const isChatEndpointConfigured = () => Boolean(getChatEndpoint());

export async function sendChatMessage(messages: ChatMessage[], signal?: AbortSignal): Promise<string> {
  const endpoint = getChatEndpoint();

  if (!endpoint) {
    throw new Error("Live AI endpoint is not configured.");
  }

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
      signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw error;
    }

    throw new Error("Cannot reach /api/chat. Run the app with Vercel or test the deployed site after redeploying.");
  }

  let payload: ChatResponsePayload = {};
  try {
    payload = (await response.json()) as ChatResponsePayload;
  } catch {
    if (response.status === 404) {
      throw new Error("Chat API route not found. Deploy api/chat.ts to Vercel or run the app with `vercel dev`.");
    }

    throw new Error(`Chat request failed with status ${response.status}.`);
  }

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Chat API route not found. Deploy api/chat.ts to Vercel or run the app with `vercel dev`.");
    }

    const detail = typeof payload.error === "string" ? payload.error : `Request failed with status ${response.status}.`;
    throw new Error(detail);
  }

  if (typeof payload.reply !== "string" || !payload.reply.trim()) {
    throw new Error("The chat endpoint returned an invalid response.");
  }

  return payload.reply.trim();
}
