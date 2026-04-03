/* import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://vicwithgg.com",
  integrations: [mdx(), sitemap()],
  output: "static",
  build: {
    assets: "_assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
 */
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://vicwithgg.com",

  // ── Integrations ──────────────────────────────────────────────
  integrations: [mdx(), sitemap()],

  // ── Output ────────────────────────────────────────────────────
  output: "static",
  build: {
    assets: "_assets",
    // Inline CSS under 4kb (critical CSS strategy)
    inlineStylesheets: "auto",
  },

  // ── Prefetch visible links automatically ──────────────────────
  prefetch: {
    prefetchAll: false, // only prefetch links with data-astro-prefetch
    defaultStrategy: "hover", // prefetch on hover (low bandwidth cost)
  },

  // ── Image optimization (Astro built-in sharp service) ─────────
  image: {
    // Use sharp for local image processing (webp, avif, resize)
    // Remote images must be explicitly allowlisted
    domains: [],
    remotePatterns: [{ protocol: "https" }],
  },

  // ── Vite ──────────────────────────────────────────────────────
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Split vendor chunks for better caching
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) return "vendor";
          },
        },
      },
    },
  },
});
