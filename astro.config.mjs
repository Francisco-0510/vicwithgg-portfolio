import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
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
      // Excluir páginas que no quieras indexar
      filter: (page) =>
        !page.includes("/privacidad") && !page.includes("/terminos"),
      serialize(item) {
        // Ajustar prioridades según tipo de página
        if (item.url.includes("/proyectos/")) {
          return { ...item, changefreq: "monthly", priority: 0.8 };
        }
        if (item.url === "https://vicwithgg-designer.netlify.app/") {
          return { ...item, changefreq: "weekly", priority: 1.0 };
        }
        return { ...item, changefreq: "monthly", priority: 0.6 };
      },
    }),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  // ── Output ────────────────────────────────────────────────────
  output: "static",
  build: {
    assets: "_assets",
    // Inline CSS under 4kb (critical CSS strategy)
    inlineStylesheets: "auto", // ✅ Inlines CSS < 14KB automáticamente    assetsPrefix: undefined,
    concurrency: 2,
    format: "file", // Genera slug/index.html en lugar de slug.html
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
    domains: ["placehold.co"],
    remotePatterns: [{ protocol: "https" }],
    // Sharp service (incluido en Astro)
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Calidad por defecto para WebP
        limitInputPixels: false,
      },
    },
  },

  // ── Markdown (para MDX case studies) ─────────────────────────
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
      // Split vendor chunks para mejor cache
      rollupOptions: {
        // Pagefind se genera DESPUÉS del build (postbuild hook).
        // Marcarlo como external evita que Rollup falle si algún script
        // no usa is:inline y Vite intenta resolverlo durante el build.
        external: [/\/pagefind\//],
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              // Chunk separado para Astro internals vs libs del usuario
              if (id.includes("@astrojs") || id.includes("astro/")) {
                return "astro-vendor";
              }
              return "vendor";
            }
          },
        },
      },
      // CSS code splitting (solo lo necesario por página)
      cssCodeSplit: true,
      // Minificar más agresivamente
      minify: "esbuild",
    },
    // Reducir transform overhead en dev
    optimizeDeps: {
      exclude: ["@astrojs/rss"],
    },
    // SSR externals (solo afecta SSR, no SSG)
    ssr: {
      noExternal: [],
    },
  },
});
