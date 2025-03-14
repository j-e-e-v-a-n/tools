import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    port: 5173, // Optional: Change the local dev port
  },
});
