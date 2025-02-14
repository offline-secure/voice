import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://offline-secure.github.io/voice/gemma-2-2b-jpn-webgpu/dist',
  plugins: [react()],
});
