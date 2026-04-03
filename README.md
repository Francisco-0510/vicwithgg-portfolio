# VicWithGG — Portfolio Personal

Portafolio personal de Francisco Victorico Aguirre Jiménez, construido con **Astro 6 + TailwindCSS + MDX**.

---

## Stack

| Tecnología       | Rol                        |
| ---------------- | -------------------------- |
| Astro 6          | Framework principal (SSG)  |
| TailwindCSS      | Utilidades + design tokens |
| MDX              | Case studies de proyectos  |
| @astrojs/sitemap | SEO — sitemap automático   |
| TypeScript       | Type safety end-to-end     |

---

## Inicio rápido

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist
npm run preview   # previsualiza /dist
```

---

## Arquitectura de componentes

```
src/
├── components/
│   ├── layout/          # Piezas de estructura de página
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── sections/        # Secciones completas de la home
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Stack.astro
│   │   ├── About.astro
│   │   └── ContactCTA.astro
│   └── ui/              # Componentes reutilizables
│       └── ProjectCard.astro
├── data/
│   └── portfolio.ts     ← FUENTE ÚNICA DE VERDAD
├── layouts/
│   ├── BaseLayout.astro  # HTML base + SEO + scripts globales
│   └── ProjectLayout.astro  # Layout para case studies MDX
├── pages/
│   ├── index.astro       # Home — ensambla todas las secciones
│   └── proyectos/
│       └── [slug].mdx    # Case studies en Markdown
└── styles/
    └── global.css        # Tokens CSS + Tailwind + utilidades
```

---

## Fuente única de verdad — `src/data/portfolio.ts`

**Todo el contenido del sitio vive en este archivo.** Para actualizar cualquier sección:

```typescript
// Cambiar info personal
export const person = { name: '...', email: '...' }

// Agregar un proyecto
export const projects = [
  { slug: 'nuevo-proyecto', name: '...', tech: [...] }
]

// Agregar experiencia laboral
export const experience = [
  { role: '...', company: '...', period: '...' }
]
```

No hay que tocar ningún componente `.astro` para actualizar contenido.

---

## Case studies con MDX

Cada proyecto puede tener una página de caso de estudio completa:

1. Crea `src/pages/proyectos/[slug].mdx`
2. Agrega el frontmatter con los datos del proyecto
3. Escribe el caso en Markdown con soporte para componentes JSX

```mdx
---
layout: ../../layouts/ProjectLayout.astro
project:
  slug: mi-proyecto
  name: Mi Proyecto
  ...
---

## El problema

Texto en Markdown...
```

---

## Design tokens

Los tokens de diseño se definen en tres lugares sincronizados:

1. **`src/styles/global.css`** → variables CSS (`:root { --accent: #d9a84e }`)
2. **`tailwind.config.mjs`** → clases Tailwind (`text-accent`, `bg-bg-card`)
3. **`src/data/portfolio.ts`** → (solo para lógica JS si se necesita)

Para cambiar el color de acento, basta con actualizar `--accent` en `global.css` y `colors.accent` en `tailwind.config.mjs`.

---

## Deploy en Netlify

```toml
# netlify.toml (crear en raíz si se necesita config especial)
[build]
  command = "npm run build"
  publish = "dist"
```

El sitio genera HTML estático en `/dist` — compatible con Netlify, Vercel, GitHub Pages, Cloudflare Pages.

---

## Imágenes requeridas

Reemplaza los placeholders en `public/`:

```
public/
├── favicon.svg
├── og-image.jpg                    # 1200×630
├── images/
│   ├── vic-profile.jpg             # Foto perfil (~400×400)
│   ├── projects/
│   │   ├── sicroa-thumb.jpg        # ~800×400
│   │   ├── altos-thumb.jpg
│   │   └── altos-ds-thumb.jpg
│   ├── stack/
│   │   ├── react.svg
│   │   ├── typescript.svg
│   │   ├── astro.svg
│   │   ├── figma.svg
│   │   ├── tailwind.svg
│   │   └── zod.svg
│   ├── certs/
│   │   ├── google.png
│   │   ├── linkedin.png
│   │   ├── certiprof.png
│   │   └── cisco.png
│   ├── edu/
│   │   ├── utvco.png
│   │   └── iebo.png
│   └── experience/
│       ├── altos-logo.png
│       └── dghoge-logo.png
```
