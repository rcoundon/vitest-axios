/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 30000,
    globals: true,
  },
  logLevel: 'info',
  esbuild: {
    sourcemap: 'both',
  },
});