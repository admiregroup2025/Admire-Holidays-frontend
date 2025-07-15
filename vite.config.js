import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // <--- this must match your backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
