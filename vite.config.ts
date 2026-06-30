import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite"; // <-- Tailwind plugin import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(), // <-- Tailwind plugin active kar diya
    tsconfigPaths(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});