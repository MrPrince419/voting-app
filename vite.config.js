import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, '.'),
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        dir: resolve(__dirname, 'dist'),
      },
    },
    emptyOutDir: true,
  },
  server: {
    open: '/index.html',
  },
});
