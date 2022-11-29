import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/lib/index.ts'),
      name: 'VueNumberIncrement',
      fileName: 'index',
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          vue: 'react'
        }
      }
    }
  }
})
