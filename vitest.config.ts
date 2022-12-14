/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

import path from 'path';

export default defineConfig({
  test: {
    testTimeout: 30000,
    globals: true,
    include: ['**/*.test.ts'],
    cache: false,
    outputTruncateLength: 10000,
    outputDiffLines: 100000,
  },
  logLevel: 'error',
  esbuild: {
    sourcemap: 'both',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/main'),
    },
  },
});
