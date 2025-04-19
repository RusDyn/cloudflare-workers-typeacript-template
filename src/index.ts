/**
 * Welcome to Cloudflare Workers! This is a template for a TypeScript Worker.
 * This file will be the entry point for your Worker application.
 *
 * For more information on Cloudflare Workers, see:
 * https://developers.cloudflare.com/workers/
 *
 * Node.js compatibility is enabled in this project.
 * You can use Node.js built-in modules like 'path', 'crypto', etc.
 */

// Example of using a Node.js built-in module
import * as path from 'path';
import type { ExecutionContext } from '@cloudflare/workers-types';

export interface Environment {
  // Add your environment variables here
  // Example: MY_VARIABLE: string;
  // Example KV Namespace: MY_KV_NAMESPACE: KVNamespace;
  // Example Durable Object: MY_DURABLE_OBJECT: DurableObjectNamespace;
  ENV: string; // Adding a property to fix the empty interface error
}

/**
 * The fetch handler is the entry point for your Worker.
 * It will be called for every request to your Worker.
 */
export default {
  async fetch(
    request: Request,
    environment: Environment,
    context: ExecutionContext,
  ): Promise<Response> {
    // Get the URL and pathname from the request
    const url = new URL(request.url);
    const { pathname } = url;

    // Log the request for debugging (using context)
    context.waitUntil(
      // eslint-disable-next-line no-console
      Promise.resolve(console.log(`Handling ${request.method} request to ${pathname}`)),
    );

    // Example route handling
    if (pathname === '/api/hello') {
      // Using Node.js path module to demonstrate Node.js compatibility
      const joinedPath = path.join('/api', 'hello', 'world');

      return new Response(
        JSON.stringify({
          message: 'Hello, World!',
          environment: environment.ENV, // Using the environment parameter
          nodejsCompatExample: {
            joinedPath,
            isAbsolute: path.isAbsolute(joinedPath),
            basename: path.basename(joinedPath),
          },
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Example HTML response for the root path
    if (pathname === '/') {
      return new Response(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cloudflare Workers TypeScript Template</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
              line-height: 1.6;
            }
            h1 {
              color: #f38020;
            }
            a {
              color: #f38020;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            code {
              background-color: #f5f5f5;
              padding: 0.2rem 0.4rem;
              border-radius: 3px;
              font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
            }
            .container {
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              padding: 2rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Cloudflare Workers TypeScript Template</h1>
            <p>Congratulations! Your Cloudflare Worker is running successfully.</p>
            <p>Try the API endpoint: <a href="/api/hello">/api/hello</a></p>
            <p>For more information on Cloudflare Workers, check out the
              <a href="https://developers.cloudflare.com/workers/" target="_blank" rel="noopener noreferrer">
                documentation
              </a>.
            </p>
          </div>
        </body>
        </html>`,
        {
          headers: {
            'Content-Type': 'text/html',
          },
        },
      );
    }

    // Return a 404 for all other routes
    return new Response('Not Found', { status: 404 });
  },
};
