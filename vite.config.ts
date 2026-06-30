import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Explicit array mapping structure for Wrangler's compiler tracking
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
    }),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    // Native Vite resolution optimization paths replacement directive
    tsconfigPaths: true,
  },
});