# VicWithGG Portfolio

Un portafolio profesional moderno, rápido y visualmente cautivador construido con tecnologías de vanguardia. Diseñado para presentar proyectos, experiencia y habilidades en diseño UX/UI y desarrollo web frontend.

**Sitio en vivo:** [https://vicwithgg-portfolio.vercel.app/](https://vicwithgg-portfolio.vercel.app/)

---

## 📋 Descripción General

**VicWithGG Portfolio** es un sitio web personal de portafolio profesional que integra diseño de experiencia de usuario con desarrollo frontend de alto rendimiento. El proyecto está optimizado para velocidad, accesibilidad y SEO, utilizando generación de contenido estático con Astro y estilos modernos con Tailwind CSS v4.

**Propósito:** Presentar de manera profesional y atractiva los proyectos, experiencia y competencias de un diseñador UX/UI y desarrollador frontend, permitiendo a potenciales clientes o empleadores conocer la propuesta de valor y contactar directamente.

**Público objetivo:** Clientes potenciales, reclutadores, colaboradores y empresas interesadas en servicios de diseño UX/UI y desarrollo web.

---

## ✨ Características Principales

- **Renderizado Estático Optimizado**: Generación de sitios completamente estáticos con Astro para máximo rendimiento
- **Diseño Responsivo**: Interfaz adaptativa que se ve perfecta en desktop, tablet y móvil
- **Tema Oscuro Personalizado**: Paleta de colores sofisticada con acentos dorados y azules
- **Animaciones Fluidas**: Transiciones y animaciones sutiles usando Tailwind CSS y JavaScript vanilla
- **Tipografía Premium**: Fuentes personalizadas auto-hospedadas (Barlow Condensed, Lora, IBM Plex Mono)
- **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards y sitemap automático generado
- **RSS Feed**: Feed RSS automático de proyectos destacados usando `@astrojs/rss`
- **Analytics Integrado**: Seguimiento de rendimiento con Vercel Analytics
- **Busca de Contenido**: Búsqueda en el sitio mediante Pagefind
- **Accesibilidad (a11y)**: Etiquetas ARIA, navegación por teclado y contraste adecuado
- **Rendimiento**: Optimización de imágenes, code splitting, minificación y compresión HTML

---

## 🛠️ Tecnologías Utilizadas

### Framework y Build

- **[Astro](https://astro.build/)** `^6.1.2` — Framework SSG para sitios estáticos ultra-rápidos
- **[Vite](https://vitejs.dev/)** — Build tool moderno incluido en Astro
- **[Node.js](https://nodejs.org/)** `20.x` (especificado en `.nvmrc`)

### Estilos y Diseño

- **[Tailwind CSS](https://tailwindcss.com/)** `^4.2.2` — Utility-first CSS framework
- **[@tailwindcss/vite](https://github.com/tailwindcss/tailwindcss/tree/next/packages/tailwindcss-vite)** `^4.2.2` — Plugin oficial de Vite
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** `^0.5.15` — Plugin para tipografía Markdown

### Componentes y UI

- **[@lucide/astro](https://lucide.dev/)** `^1.7.0` — Librería de iconos SVG modular

### Tipografía

- **[@fontsource/barlow-condensed](https://fontsource.org/)** `^5.2.8` — Fuente display
- **[@fontsource/lora](https://fontsource.org/)** `^5.2.8` — Fuente serif para body
- **[@fontsource/ibm-plex-mono](https://fontsource.org/)** `^5.2.7` — Fuente monoespaciada
- **[@fontsource-variable/inter](https://fontsource.org/)** `^5.2.8`
- **[@fontsource-variable/onest](https://fontsource.org/)** `^5.2.11`

### Contenido y Datos

- **[@astrojs/mdx](https://docs.astro.build/es/guides/integrations-guide/mdx/)** `^5.0.3` — Soporte para archivos MDX (Markdown + JSX)
- **[astro:content](https://docs.astro.build/es/guides/content-collections/)** — Content Collections API integrada

### Integrations Astro

- **[@astrojs/react](https://docs.astro.build/es/guides/integrations-guide/react/)** `^5.0.2` — Soporte para componentes React (opcional)
- **[@astrojs/sitemap](https://docs.astro.build/es/guides/integrations-guide/sitemap/)** `^3.7.2` — Generación automática de sitemap.xml
- **[@astrojs/rss](https://docs.astro.build/es/guides/integrations-guide/rss/)** `^4.0.18` — Generación de feeds RSS
- **[@astrojs/check](https://docs.astro.build/es/guides/integrations-guide/check/)** `^0.9.8` — Type checking integrado
- **[@astrojs/vercel](https://docs.astro.build/es/guides/integrations-guide/vercel/)** `^10.0.4` — Adapter para Vercel

### Analytics y Búsqueda

- **[@vercel/analytics](https://vercel.com/analytics)** `^2.0.1` — Analytics de Vercel
- **[pagefind](https://pagefind.app/)** `^1.4.0` — Búsqueda estática en el sitio (dev dependency)

### Desarrollo

- **[TypeScript](https://www.typescriptlang.org/)** `^5.6.3` — Tipado estático para JavaScript
- **[Prettier](https://prettier.io/)** `^3.4.1` — Code formatter
- **[prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)** `^0.14.1` — Soporte Prettier para Astro

---

## 📦 Instalación

### Requisitos Previos

- Node.js 20.x o superior
- npm, pnpm o yarn como gestor de paquetes

### Pasos de Instalación

1. **Clonar el repositorio:**

```bash
git clone https://github.com/Francisco-0510/vicwithgg-portfolio.git
cd vicwithgg-portfolio
```

1. **Instalar dependencias:**

```bash
npm install
# o
pnpm install
# o
yarn install
```

1. **Descargar fuentes locales (opcional pero recomendado):**

```bash
npm run fonts
```

Este comando ejecuta el script `scripts/download-fonts.sh` que descarga las fuentes a `public/fonts/` para auto-hospedaje y mejor control de performance.

1. **Configurar variables de entorno (si es necesario):**

Crear un archivo `.env` en la raíz del proyecto si necesitas variables privadas:

```env
# No hay variables de entorno requeridas en este proyecto
# pero puedes agregar las tuyas según necesites
```

---

## 🚀 Uso / Ejecución

### Desarrollo Local

Inicia el servidor de desarrollo con hot reload:

```bash
npm run dev
# o
npm run start
```

El sitio estará disponible en: **<http://localhost:4321>**

### Build para Producción

Compila el sitio a archivos estáticos optimizados:

```bash
npm run build
```

Este comando ejecuta:

- `astro check` — Verificación de tipos TypeScript
- `astro build` — Compilación a HTML/CSS/JS estáticos
- `postbuild` — Generación del índice de búsqueda con Pagefind

Build rápido sin type checking (desarrollo):

```bash
npm run build:fast
```

### Preview de Producción

Visualiza el build de producción localmente:

```bash
npm run preview
```

### Análisis de Rendimiento

Ejecuta auditoría Lighthouse en desktop:

```bash
npm run lighthouse
```

Ejecuta auditoría Lighthouse en móvil:

```bash
npm run lighthouse:mobile
```

Los reportes HTML se guardan en `./lighthouse-report.html` y `./lighthouse-mobile.html`

### Otros Comandos

```bash
# Ejecutar comando Astro directo
npm run astro -- [comando]

# Formatear código
npx prettier --write .

# Type checking
npm run astro check
```

---

## 📁 Estructura del Proyecto

```code
vicwithgg-portfolio/
├── .astro/                           # Tipos generados por Astro (ignorar)
├── .github/                          # Configuración de GitHub (workflows, etc.)
├── .vscode/                          # Configuración de VS Code
├── .vercel/                          # Configuración de Vercel
├── public/                           # Archivos estáticos
│   ├── fonts/                        # Fuentes auto-hospedadas
│   ├── images/                       # Imágenes estáticas
│   ├── favicon.svg                   # Favicon
│   └── og-image.jpg                  # Open Graph default image
├── src/
│   ├── components/                   # Componentes Astro reutilizables
│   │   ├── layout/
│   │   │   ├── Navbar.astro          # Barra de navegación
│   │   │   ├── Footer.astro          # Pie de página
│   │   │   └── ClientRouter.astro    # Router de vistas
│   │   ├── sections/
│   │   │   ├── Hero.astro            # Sección hero/introducción
│   │   │   ├── Projects.astro        # Galería de proyectos
│   │   │   ├── Experience.astro      # Experiencia laboral
│   │   │   ├── Stack.astro           # Stack tecnológico
│   │   │   ├── About.astro           # Sección sobre mí
│   │   │   └── ContactCTA.astro      # Llamada a acción de contacto
│   │   └── ui/
│   │       ├── Button.astro          # Componente botón
│   │       ├── Card.astro            # Componente tarjeta
│   │       ├── Label.astro           # Componente etiqueta
│   │       ├── Icon.astro            # Componente icono
│   │       ├── ProjectCard.astro     # Tarjeta de proyecto
│   │       └── icon-types.ts         # Tipos para iconos
│   ├── content/                      # Content Collections
│   │   └── proyectos/                # Colección de proyectos (archivos .mdx)
│   │       └── sicroa.mdx            # Ejemplo: proyecto SiCROA
│   ├── data/
│   │   └── portfolio.ts              # Data única del portafolio (SSOT)
│   ├── layouts/
│   │   └── BaseLayout.astro          # Layout base con SEO y meta tags
│   ├── lib/
│   │   └── collections.ts            # Utilidades para colecciones
│   ├── utils/
│   │   └── helpers.ts                # Funciones helper (formatDate, slugify, etc.)
│   ├── styles/
│   │   ├── global.css                # Estilos globales + Tailwind
│   │   └── fonts.css                 # Definiciones de fuentes
│   ├── pages/                        # Rutas automáticas (file-based routing)
│   │   ├── index.astro               # Página principal (/)
│   │   ├── [...slug].astro           # Páginas de proyectos dinámicas
│   │   └── rss.xml.ts                # Feed RSS
│   ├── env.d.ts                      # Declaraciones de tipos de Astro
│   └── content.config.ts             # Configuración de Content Collections
├── scripts/
│   └── download-fonts.sh             # Script para descargar fuentes
├── dist/                             # Build output (ignorar)
├── .editorconfig                     # Configuración del editor
├── .gitignore                        # Archivos ignorados en Git
├── .nvmrc                            # Versión de Node recomendada
├── .prettierrc.mjs                   # Configuración de Prettier
├── astro.config.mjs                  # Configuración principal de Astro
├── tailwind.config.mjs               # Configuración de Tailwind CSS
├── tsconfig.json                     # Configuración de TypeScript
├── vercel.json                       # Configuración de Vercel
├── package.json                      # Dependencias y scripts
└── README.md                         # Este archivo
```

### Árbol de Contenido

```code
src/content/
└── proyectos/                        # Colección: Proyectos destacados
    ├── sicroa.mdx                    # Proyecto: Sistema CROA
    ├── [proyecto-2].mdx
    ├── [proyecto-3].mdx
    └── ...
```

Cada archivo `.mdx` en `src/content/proyectos/` es automáticamente procesado como un proyecto con metadatos frontmatter.

---

## ⚙️ Configuración

### Variables de Entorno

No hay variables de entorno obligatorias. Sin embargo, puedes crear un archivo `.env` para desarrollo local:

```env
# Opcional para desarrollo
# Ninguna variable es estrictamente requerida en este proyecto
```

### Configuración Principal (astro.config.mjs)

**Sitio:**

```javascript
site: "https://vicwithgg-portfolio.vercel.app/";
```

**Compresión:**

- `compressHTML: true` — Compresión automática de HTML

**Integraciones:**

- **MDX** con syntax highlighting (`github-dark-dimmed` theme)
- **Sitemap** con prioridades por tipo de página
- **Tailwind CSS v4** integrado
- **Vercel Adapter** con Image Service y Web Analytics

**Optimizaciones Vite:**

- Code splitting automático por vendors
- CSS splitting independiente
- Minificación con esbuild
- Chunk optimization (astro-vendor, vendor)

### Configuración de Tailwind (tailwind.config.mjs)

**Tokens de Diseño Personalizados:**

| Categoría            | Tokens                                                    |
| -------------------- | --------------------------------------------------------- |
| **Colores de Fondo** | `bg`, `bg-1`, `bg-2`, `bg-card`, `bg-card-h`              |
| **Acentos**          | `accent`, `accent-dim`, `accent-glow`, `blue`, `blue-dim` |
| **Texto**            | `text` (default), `text-2`, `text-3`                      |
| **Líneas**           | `line` (default), `line-accent`                           |

**Tipografías:**

- `font-display` — Barlow Condensed (900 Bold)
- `font-body` — Lora (400 Regular)
- `font-mono` — IBM Plex Mono (400 Regular)

**Animaciones Personalizadas:**

- `marquee` — Desplazamiento infinito
- `scroll-pulse` — Pulso para indicador scroll
- `fade-in` — Fade in suave
- `slide-up` — Slide up con fade

**Utilidades Personalizadas:**

- `.text-stroke` — Efecto de trazo en texto
- `.gradient-border` — Borde con gradiente
- `.label-line` — Línea decorativa en etiquetas

### Configuración de Contenido (src/content.config.ts)

```typescript
definición de colección "proyectos":
  - Loader: glob de archivos .mdx en src/content/proyectos
  - Schema Zod con validación de campos:
    * name (string, requerido)
    * sector (string, requerido)
    * description (string, requerido)
    * thumbnail (string, requerido)
    * tech (array de strings)
    * links (objeto: live, github, figma — opcionales)
    * featured (boolean, default: false)
    * type (enum: "app", "web", "design")
    * order (number, para ordenamiento)
    * draft (boolean, default: false — excluir de build)
    * date (date, opcional)
```

---

## 📝 Ejemplos

### Crear un Nuevo Proyecto

1. **Crear archivo** `src/content/proyectos/mi-proyecto.mdx`:

```mdx
---
name: "Mi Proyecto Increíble"
sector: "Tecnología · SaaS"
description: "Descripción breve del proyecto y su impacto."
thumbnail: "/images/projects/thumbnail-mi-proyecto.webp"
tech: ["React", "TypeScript", "Tailwind", "Next.js"]
links:
  live: "https://ejemplo.com"
  github: "https://github.com/usuario/proyecto"
  figma: "https://figma.com/file/..."
featured: true
type: "app"
order: 1
draft: false
date: 2026-01-15
---

## 🎯 Visión General

Tu descripción aquí...

## 💡 Solución Clave

- Punto 1
- Punto 2

## ⚙️ Stack Técnico

| Tecnología | Uso           |
| ---------- | ------------- |
| React      | UI Components |

## 📊 Resultados

- Metrica 1
- Metrica 2
```

1. **Ejecutar build**: El proyecto aparecerá automáticamente en el portafolio

### Actualizar Datos Personales

Editar `src/data/portfolio.ts`:

```typescript
export const person = {
  name: "Tu Nombre",
  handle: "TuHandle",
  email: "tu@email.com",
  location: "Tu Ciudad",
  roles: ["Tu Rol 1", "Tu Rol 2"],
  bio: ["Tu biografía..."],
  social: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-perfil",
    // ...más redes
  },
};
```

Este archivo es la **Single Source of Truth (SSOT)** — cualquier cambio se propaga a toda la aplicación automáticamente.

---

## 🤝 Contribución

Las contribuciones son bienvenidas para:

- Mejoras de rendimiento
- Correcciones de bugs
- Mejoras de accesibilidad
- Nuevas características o componentes
- Mejoras de documentación

### Proceso de Contribución

1. **Fork** el repositorio
2. **Crea una rama** (`git checkout -b feature/AmazingFeature`)
3. **Realiza cambios** manteniendo el estilo de código (Prettier está configurado)
4. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. **Push** a la rama (`git push origin feature/AmazingFeature`)
6. **Abre un Pull Request** describiendo los cambios

### Estándares de Código

- Usa TypeScript con tipos estrictos
- Formatea con `npm run format` (Prettier)
- Respeta la estructura de componentes existente
- Incluye comentarios en código complejo
- Asegúrate de que el build sea exitoso (`npm run build`)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver detalles en el archivo LICENSE si existe.

---

## 👤 Autor

**Francisco Victorico Aguirre Jiménez** (VicWithGG)

- **Email:** <vgg.designer.01@gmail.com>
- **GitHub:** [@Francisco-0510](https://github.com/Francisco-0510)
- **LinkedIn:** [vicwith-gg](https://www.linkedin.com/in/vicwith-gg/)
- **Figma:** [@vicwithgg](https://www.figma.com/@vicwithgg)
- **X (Twitter):** [@VicWithGG1](https://x.com/VicWithGG1)
- **Instagram:** [@vicwithgg](https://www.instagram.com/vicwithgg)

---

## 📞 Contacto y Disponibilidad

**Disponible para:** Proyectos freelance • Colaboraciones • Oportunidades full-time

Contacta a través de:

- 📧 Email: <vgg.designer.01@gmail.com>
- 📱 WhatsApp: +52 1 951 391 5906
- 🔗 LinkMe: <https://link.me/vicwithgg>

---

## 🔍 Notas Técnicas

### Performance

- ✅ HTML comprimido automáticamente
- ✅ Optimización de imágenes (AVIF, WebP)
- ✅ Fonts auto-hospedadas con preload
- ✅ Code splitting por vendors
- ✅ CSS code splitting independiente
- ✅ Analytics con impact mínimo

### SEO

- ✅ Sitemap automático generado
- ✅ Open Graph meta tags
- ✅ Twitter Cards
- ✅ RSS feed
- ✅ Canonical URLs
- ✅ Meta descriptions dinámicas

### Accesibilidad

- ✅ ARIA labels y roles semánticos
- ✅ Skip link para teclado
- ✅ Contraste de colores WCAG AA
- ✅ Navegación por teclado completa
- ✅ Focus indicators visibles

### Deployment

- 🚀 Deployado en **Vercel**
- 📍 Región: Singapore (sin1)
- ⚡ CDN global automático
- 🔄 Deploys en cada push a main
- 📊 Vercel Analytics habilitado

---

## 📚 Recursos Útiles

- [Documentación de Astro](https://docs.astro.build/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [MDX Official](https://mdxjs.com/)
- [Vercel Deployment](https://vercel.com/docs)
- [Pagefind Search](https://pagefind.app/)

---

**Última actualización:** 2026-04-09 | Versión: 0.0.1
