import { describe, it, expect } from 'vitest';
import worker, { type Environment } from '../src/index';
import type { ExecutionContext } from '@cloudflare/workers-types';

describe('Worker', () => {
  // Mock environment and context
  const environment = {} as Environment;
  const context = {
    waitUntil: (promise: Promise<unknown>): void => {
      // This is a mock implementation
      void promise;
    },
    passThroughOnException: (): void => {
      // This is a mock implementation
    },
  } as ExecutionContext;

  describe('GET /', () => {
    it('should return HTML response', async () => {
      const request = new Request('https://example.com/');
      const response = await worker.fetch(request, environment, context);

      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('text/html');

      const text = await response.text();
      expect(text).toContain('Cloudflare Workers TypeScript Template');
      expect(text).toContain('Your Cloudflare Worker is running successfully');
    });
  });

  describe('GET /api/hello', () => {
    it('should return JSON response', async () => {
      const request = new Request('https://example.com/api/hello');
      const response = await worker.fetch(request, environment, context);

      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/json');

      const json = (await response.json()) as {
        message: string;
        nodejsCompatExample: {
          joinedPath: string;
          isAbsolute: boolean;
          basename: string;
        };
      };
      expect(json).toHaveProperty('message', 'Hello, World!');
      expect(json).toHaveProperty('nodejsCompatExample');
      expect(json.nodejsCompatExample).toHaveProperty('joinedPath');
      expect(json.nodejsCompatExample).toHaveProperty('isAbsolute');
      expect(json.nodejsCompatExample).toHaveProperty('basename');
      expect(json.nodejsCompatExample.joinedPath).toBe('/api/hello/world');
      expect(json.nodejsCompatExample.basename).toBe('world');
    });
  });

  describe('GET /not-found', () => {
    it('should return 404 for unknown routes', async () => {
      const request = new Request('https://example.com/not-found');
      const response = await worker.fetch(request, environment, context);

      expect(response.status).toBe(404);
      expect(await response.text()).toBe('Not Found');
    });
  });
});
