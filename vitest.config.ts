/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - no types
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@src': '/src' } },
  test: {
    setupFiles: ['src/config/setupTests.ts'],
    globals: true,
    environment: 'jsdom',
    dir: 'src',
    coverage: {
      reporter: ['json-summary'],
      provider: 'istanbul',
    },
  },
});
