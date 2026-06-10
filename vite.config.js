import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/web2-main/', // ⭐ 關鍵：這次要改成新 Repository 的名字！
})