import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-website/', // 這裡必須與你的 GitHub 倉庫名稱一致
})
