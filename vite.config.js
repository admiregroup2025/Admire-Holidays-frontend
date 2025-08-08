import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load .env files based on the mode (development, production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      // add other specific env vars you need here
    },
    // ... other config options
  };
});
