import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site published at https://eliotilazi.github.io (user site, so base is "/")
export default defineConfig({
  plugins: [react()],
  base: '/',
})
