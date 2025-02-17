import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({ 
  base: 'https://d252d57s6crzq1.cloudfront.net/gemma-2-2b-jpn-webgpu/dist',
 
  plugins: [react()],
});
