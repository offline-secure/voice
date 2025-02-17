import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({ 
  base: 'https://d252d57s6crzq1.cloudfront.net/deepseekweb/dist',
 
  plugins: [tailwindcss(), react()],
});
