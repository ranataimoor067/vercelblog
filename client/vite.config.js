import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:3000',
          secure: false,
        },
      },
    },
    plugins: [react()],
    build: {
      outDir: 'dist', // Output directory
      emptyOutDir: true, // Clear the output directory before building
    },
  };
});