# Portfolio chatbot integration

The portfolio uses a Vercel serverless endpoint backed by Groq's OpenAI-compatible API and the `openai/gpt-oss-120b` model. The UI intentionally keeps the Groq API key and model configuration off the client.

## Frontend contract

Production Vercel builds default to the same-origin endpoint:

```bash
VITE_CHAT_ENDPOINT=/api/chat
```

The frontend only needs `VITE_CHAT_ENDPOINT` when using a separate backend. The Groq secret belongs in the server environment:

```bash
GROQ_API_KEY=your_private_key
```

Use Vercel Project Settings → Environment Variables for `GROQ_API_KEY`. Never expose it through a `VITE_` variable or commit it to the repository.

The widget sends:

```json
{
  "messages": [
    { "role": "assistant", "content": "..." },
    { "role": "user", "content": "What did you build?" }
  ]
}
```

The endpoint returns:

```json
{ "reply": "A concise answer grounded in the portfolio data." }
```

## Server behavior

- Keep the provider API key in a server-side environment variable.
- Validate the request body and cap message count, message length, and request rate.
- Use the server-owned system prompt and portfolio context; do not accept client-provided system messages.
- Return generic public errors while logging only non-sensitive provider error details server-side.
- Stream responses later with SSE or chunked `fetch` if the UI needs token-by-token output.
- Never trust client-provided system prompts or role messages.

## Persona contract

The assistant should answer as a grounded portfolio representative for Rachit Tiwari:

- Speak in first person when describing Rachit’s work, experience, education, skills, and projects.
- Be concise, direct, technically specific, and calm.
- Prefer concrete evidence from the portfolio over generic claims.
- Do not invent employers, metrics, clients, dates, technologies, or responsibilities.
- If information is missing, say that it is not listed and offer the closest documented detail.
- Explain architecture tradeoffs clearly for both technical and non-technical visitors.
- For medical topics, describe VitaMend/MEDCHECK as software projects only; do not provide medical advice.
- For contact or hiring questions, direct visitors to the visible contact section and published profile links.

The implementation is in `api/chat.ts`. It exports Vercel's standard `fetch` handler, applies a small per-instance rate limit, validates messages, injects the grounded portfolio persona, and forwards requests to Groq using `openai/gpt-oss-120b`.

## Local testing

`npm run dev` now starts a small local `/api/chat` middleware that reuses the Vercel handler. Keep `VITE_CHAT_ENDPOINT=/api/chat` and make sure `GROQ_API_KEY` is present in `.env.local`. Use `vercel dev` when you want to test against Vercel's own local runtime, or deploy to Vercel and test the deployed site. The frontend endpoint should be `/api/chat`, not a placeholder such as `https://your-site.vercel.app/api/chat`.
