import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://vicwithgg-portfolio.vercel.app",
  compressHTML: true, // ← Habilitar compresión HTML

  // ── Integrations ──────────────────────────────────────────────
  integrations: [
    mdx({
      shikiConfig: {
        theme: "github-dark-dimmed",
        wrap: true,
      },
    }),
    sitemap({
      filter: (page) =>
        !page.includes("/privacidad") &&
        !page.includes("/terminos") & !page.includes("/terminos") &&
        !page.includes("/draft/") &&
        !page.includes("/admin/"),
      serialize(item) {
        // Homepage
        if (item.url === "https://vicwithgg-portfolio.vercel.app/") {
          return {
            ...item,
            changefreq: "weekly",
            priority: 1.0,
          };
        }
        // Case studies
        if (item.url.includes("/proyectos/")) {
          return {
            ...item,
            changefreq: "monthly",
            priority: 0.9,
          };
        }
        // Resto
        return {
          ...item,
          changefreq: "monthly",
          priority: 0.6,
        };
      },
    }),
    tailwindcss(),
  ],

  // ── Output ────────────────────────────────────────────────────
  output: "static",
  build: {
    assets: "_assets",
    inlineStylesheets: "auto",
    concurrency: 4,
    format: "file",
  },
  // Para compresión Brotli/Gzip en producción:

  // ── Prefetch ──────────────────────────────────────────────────
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },

  // ── Image (una sola vez, consolidado) ─────────────────────────
  image: {
    domains: ["placehold.co"],
    remotePatterns: [{ protocol: "https" }],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: 100_000_000,
        formats: ["avif", "webp"],
      },
    },
  },

  // ── Markdown ──────────────────────────────────────────────────
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: true,
    },
    gfm: true,
  },

  // ── Vite ──────────────────────────────────────────────────────
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: [/\/pagefind\//],
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("@astrojs") || id.includes("astro/")) {
                return "astro-vendor";
              }
              return "vendor";
            }
          },
        },
      },
      cssCodeSplit: true,
      minify: "esbuild",
      sourcemap: false,
    },
    optimizeDeps: {
      exclude: ["@astrojs/rss"],
    },
    ssr: {
      noExternal: [],
    },
  },
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});
