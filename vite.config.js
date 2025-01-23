import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, '.'), // explicitly set root
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        dir: resolve(__dirname, 'dist'), // set output directory
      },
    },
    emptyOutDir: true, // clean the output directory before building
  },
  server: {
    open: '/index.html', // auto-open this file in the browser
  },
});
