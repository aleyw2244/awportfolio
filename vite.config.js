import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: parseInt(env.VITE_DEV_SERVER_PORT) || 3000,
      host: env.VITE_DEV_SERVER_HOST || 'localhost',
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    }
  }
}) 