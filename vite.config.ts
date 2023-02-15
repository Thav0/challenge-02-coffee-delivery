import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import prettier from "vite-plugin-prettier";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    prettier({
      usePrettierrc: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@assets": "/src/assets",
    },
  },
});
