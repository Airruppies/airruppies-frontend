import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env

  }
});
