import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'miniflare',
    environmentOptions: {
      // Miniflare options
      modules: true,
      scriptFormat: 'esm',
      compatibilityDate: '2023-12-01',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    include: ['test/**/*.{test,spec}.{js,ts}'],
  },
});
