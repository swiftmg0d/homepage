import { defineConfig } from 'vite';
import { redact } from '@tanstack/redact/vite';

export default defineConfig({
  plugins: [redact({ environments: ['client'] })],
  esbuild: { jsx: 'automatic' },
});
