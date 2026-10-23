import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
              return "react-vendor";
            }
            if (id.includes("swiper")) {
              return "swiper-vendor";
            }
            if (id.includes("react-icons")) {
              return "icons-vendor";
            }
            if (id.includes("bootstrap")) {
              return "bootstrap-vendor";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
