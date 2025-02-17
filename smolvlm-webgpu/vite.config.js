import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({ 
  base: 'https://offline-secure.github.io/voice/smolvlm-webgpu/dist',
  plugins: [tailwindcss(), react()],
});
