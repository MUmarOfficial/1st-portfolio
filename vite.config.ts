import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router"],
          "vendor-three": ["three"],
          "vendor-r3f": ["@react-three/fiber", "@react-three/drei"],
          "vendor-motion": ["framer-motion", "motion", "gsap"],
          "vendor-ui": ["radix-ui", "lucide-react", "react-icons"],
        },
      },
    },
  },
})
