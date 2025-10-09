import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/07-tic-tac-toe-starting-project-2/', // 👈 هذا مهم جداً
})