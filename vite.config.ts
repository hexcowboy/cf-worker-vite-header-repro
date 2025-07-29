import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 6001, headers: { Test: "test" } },
  plugins: [react(), cloudflare()],
});
