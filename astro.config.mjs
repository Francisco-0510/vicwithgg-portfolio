import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "astro/config";

// https://astro.com/config
export default defineConfig({
  // SEO: URL base del sitio (sin trailing slash para consistencia)
  site: "https://vicwithgg-portfolio.vercel.app",

  // Compresión HTML para reducir tamaño de respuesta
  compressHTML: true,

  // ── Integrations ──────────────────────────────────────────────
  integrations: [
    mdx({
      shikiConfig: {
        theme: "github-dark-dimmed",
        wrap: true,
      },
    }),
    // SEO: Sitemap optimizado con prioridades personalizadas
    sitemap({
      filter: (page) =>
        !page.includes("/privacidad") && !page.includes("/terminos"),
      serialize(item) {
        // Prioridad máxima para homepage
        if (item.url.endsWith("/")) {
          return { ...item, changefreq: "weekly", priority: 1.0 };
        }
        // Alta prioridad para servicios (página de conversión)
        if (item.url.includes("/servicios")) {
          return { ...item, changefreq: "monthly", priority: 0.9 };
        }
        // Prioridad media-alta para proyectos
        if (item.url.includes("/proyectos/")) {
          return { ...item, changefreq: "monthly", priority: 0.8 };
        }
        // Prioridad estándar para otras páginas
        return { ...item, changefreq: "monthly", priority: 0.6 };
      },
    }),
    tailwindcss(),
  ],

  // ── Output: SSG puro para máximo rendimiento ─────────────────
  output: "static",
  build: {
    assets: "_assets",
    inlineStylesheets: "auto",
    concurrency: 4, // Build paralelo para mejor performance
    format: "file",
  },

  // ── Prefetch: Estrategia híbrida para UX óptima ───────────────

  prefetch: {
    prefetchAll: false, // No precargar todo (ahorra bandwidth)
    defaultStrategy: "hover", // Precargar al hacer hover (mejor INP)
  },

  // ── Image (una sola vez, consolidado) ─────────────────────────
  image: {
    domains: ["placehold.co"],
    remotePatterns: [{ protocol: "https" }],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: 100_000_000, // Permite imágenes grandes
        formats: ["avif", "webp"], // Formatos modernos primero
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
      sourcemap: false, // Sin source maps en producción (reduce tamaño)
    },
    optimizeDeps: {
      exclude: ["@astrojs/rss"],
    },
    ssr: {
      noExternal: [],
    },
  },
  adapter: vercel({
    imageService: true, // Usar Image Optimization de Vercel
    webAnalytics: {
      enabled: true, // Vercel Analytics
    },
  }),
});
