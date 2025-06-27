import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // <-- 1. Importa el módulo 'path'

export default defineConfig({
  plugins: [vue()],
  // 2. Añade esta sección 'resolve'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
