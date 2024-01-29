/// <reference types="vitest">
/// <reference types="vite/client">

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
