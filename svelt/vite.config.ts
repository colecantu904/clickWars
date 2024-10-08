import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    target: "esnext", // or "es2019",
  },
  plugins: [svelte()],
})
