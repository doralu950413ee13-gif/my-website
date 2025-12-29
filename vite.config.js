import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 確保使用相對路徑，這樣在 GitHub Pages 才抓得到檔案
})
