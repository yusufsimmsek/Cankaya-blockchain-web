// Vite geliştirme sunucusunu yerel ağda (IP ile) erişilebilir yapmak için host: true eklenmiştir.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  }
}) 