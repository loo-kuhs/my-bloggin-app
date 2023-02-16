import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path)
          const p = path.replace(/^\/api/, '')
          console.log(p)
          return p
        },
      },
    },
  },
})
