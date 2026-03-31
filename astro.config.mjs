// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  compressHTML: true, // Minifica el HTML y los scripts inline
  build: {
    inlineStylesheets: "always", // Mejora el rendimiento de carga de CSS
  },
  site: "https://vicwithgg-designer.netlify.app",
  integrations: [sitemap()],
});
