import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  site: "https://braum.org",
  server: {
    host: true,
    port: 4322,
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
