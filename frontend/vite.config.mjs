import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    port: 3001, // Set the port to 3000
    host: 'localhost', // Bind to localhost
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Port where your Express server is running
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
