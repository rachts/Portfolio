import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { handleChatRequest } from './api/chat';

function localChatApi(): Plugin {
  return {
    name: 'local-chat-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/chat', (request, response, next) => {
        if (request.method !== 'POST') {
          next();
          return;
        }

        let rawBody = '';
        let bodyTooLarge = false;

        request.on('data', (chunk: Buffer | string) => {
          rawBody += chunk.toString();
          if (rawBody.length > 1_000_000 && !bodyTooLarge) {
            bodyTooLarge = true;
            response.statusCode = 413;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify({ error: 'Request body is too large.' }));
          }
        });

        request.on('end', async () => {
          if (bodyTooLarge || response.writableEnded) return;

          try {
            const headers = new Headers();
            for (const [name, value] of Object.entries(request.headers)) {
              if (typeof value === 'string') headers.set(name, value);
              else if (Array.isArray(value)) headers.set(name, value.join(', '));
            }

            const requestUrl = `http://${request.headers.host ?? 'localhost'}${request.url ?? '/api/chat'}`;
            const webRequest = new Request(requestUrl, {
              method: 'POST',
              headers,
              body: rawBody,
            });
            const webResponse = await handleChatRequest(webRequest);

            response.statusCode = webResponse.status;
            webResponse.headers.forEach((value, name) => response.setHeader(name, value));
            response.end(Buffer.from(await webResponse.arrayBuffer()));
          } catch (error) {
            console.error('Local chat API failed', error);
            if (!response.writableEnded) {
              response.statusCode = 500;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify({ error: 'Local chat server failed.' }));
            }
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (env.GROQ_API_KEY && !process.env.GROQ_API_KEY) {
    process.env.GROQ_API_KEY = env.GROQ_API_KEY;
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      localChatApi(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/three") || id.includes("node_modules/@react-three")) return "three-vendor";
          },
        },
      },
    },
  };
});
