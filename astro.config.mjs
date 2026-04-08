import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vicwithgg-designer.netlify.app",

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
        !page.includes("/privacidad") && !page.includes("/terminos"),
      serialize(item) {
        if (item.url.includes("/proyectos/")) {
          return { ...item, changefreq: "monthly", priority: 0.8 };
        }
        if (item.url === "https://vicwithgg-designer.netlify.app/") {
          return { ...item, changefreq: "weekly", priority: 1.0 };
        }
        return { ...item, changefreq: "monthly", priority: 0.6 };
      },
    }),
    tailwindcss(),
  ],

  // ── Output ────────────────────────────────────────────────────
  output: "static",
  build: {
    assets: "_assets",
    inlineStylesheets: "auto",
    concurrency: 2,
    format: "file",
  },

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
        limitInputPixels: false,
      },
    },
  },

  // ── Markdown ──────────────────────────────────────────────────
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: true,
    },
    remarkPlugins: [],
    rehypePlugins: [],
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
    },
    optimizeDeps: {
      exclude: ["@astrojs/rss"],
    },
    ssr: {
      noExternal: [],
    },
  },
});
