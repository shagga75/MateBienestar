import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // En Vercel no necesitamos definir 'base' ya que usa la raíz por defecto
})