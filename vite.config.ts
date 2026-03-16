import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: /<repo-name>/
  // Change 'yaz-brain' to your actual repo name
  base: '/yaz-brain/',
})
