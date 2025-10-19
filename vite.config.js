import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import electron from 'vite-plugin-electron/simple'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    electron({
      main: {
        entry: 'electron/main.ts',
        vite:{
          build: {
            outDir: 'build/dist-electron'
          }
        }
      }
    }),
  ],
  base: './',
  build: {
      outDir: 'build'
  }
})
