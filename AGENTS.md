# AGENTS.md

## Dev Commands
```bash
npm run dev      # Dev server: http://localhost:4321
npm run build    # Full build (typecheck + build + pagefind)
npm run build:fast  # Build only (skip typecheck)
npm run preview  # Preview production build
npm run fonts    # Download local fonts (runs scripts/download-fonts.sh)
```

## Important Quirks

- **Tailwind CSS v4** - Uses `@tailwindcss/vite` plugin, NOT PostCSS. Config in `tailwind.config.mjs` (not `.css`).
- **Fonts** - Run `npm run fonts` after first clone to download local fonts to `public/fonts/`.
- **Search** - Pagefind index built automatically as postbuild step. Search UI at `/pagefind/`.
- **Content Collections** - Projects in `src/content/proyectos/*.mdx`. Frontmatter schema: `name`, `sector`, `description`, `thumbnail`, `tech`, `links`, `featured`, `type`, `order`, `draft`, `date`. Set `draft: true` to exclude from build.
- **Data SSOT** - Edit `src/data/portfolio.ts` for personal info. All components import from here.
- **Vercel** - Adapter configured with web analytics. Build output `dist/`.

## Path Aliases
```json
"@/*": "src/*"
"@components/*": "src/components/*"
"@layouts/*": "src/layouts/*"
"@data/*": "src/data/*"
"@styles/*": "src/styles/*"
```

## Architecture
- Static site (SSG) with Astro
- No database or API routes
- No test suite (no tests in repo)
- Single content collection: `proyectos`