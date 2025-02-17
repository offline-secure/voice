import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://offline-secure.github.io/voice/llama-3.2-webgpu/dist',
  plugins: [react()],
});
