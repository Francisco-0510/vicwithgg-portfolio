// src/data/portfolio.ts
// ═══════════════════════════════════════════════════════════════
//  SINGLE SOURCE OF TRUTH — VicWithGG Portfolio Data
//  Edit this file to update all sections of the site.
// ═══════════════════════════════════════════════════════════════

// ── SITE META ────────────────────────────────────────────────
export const site = {
  title: "VicWithGG | Diseñador UX/UI y Desarrollador Web",
  description:
    "Portfolio de Francisco Victorico Aguirre Jiménez — Diseñador UX/UI y Desarrollador Web especializado en experiencias digitales de alta calidad.",
  url: "https://vicwithgg.com",
  locale: "es",
} as const;

// ── PERSONAL INFO ─────────────────────────────────────────────
export const person = {
  name: "Francisco Victorico Aguirre Jiménez",
  handle: "VicWithGG",
  initials: "VGG",
  location: "Oaxaca, MX",
  roles: ["Diseñador UX/UI", "Desarrollador Frontend"],
  tagline: "Diseño que razona. Código que respira.",
  bio: [
    "Soy Francisco Victorico Aguirre Jiménez, Diseñador UX/UI y Desarrollador Web comprometido con crear experiencias digitales que destacan. Equilibro las necesidades del usuario con los objetivos del producto, utilizando metodologías ágiles, investigación y diseño centrado en las personas.",
    "Mi enfoque estratégico e intuitivo, junto con el dominio de herramientas avanzadas, me permite convertir ideas en soluciones innovadoras y efectivas. Siempre busco aprender, mejorar y superar nuevos desafíos.",
  ],
  /*  bio: [
    "Combino pensamiento estratégico de diseño con ejecución técnica para construir productos digitales que equilibran usuario y negocio.",
    "Con experiencia en sistemas de diseño, interfaces complejas y desarrollo frontend moderno, trabajo en todo el pipeline: de Figma a producción.",
  ], */
  availability:
    "Disponible para proyectos freelance, colaboraciones y oportunidades full-time",
  photo: "/images/me.jpg", // replace with real photo
  email: "hola@vicwithgg.com",
  social: {
    linkMe: "https://link.me/vicwithgg",
    figma: "https://www.figma.com/@vicwithgg",
    github: "https://github.com/vicwithgg",
    linkedin: "https://linkedin.com/in/vicwithgg",
    x: "https://x.com/VicWithGG1",
    instagram: "https://www.instagram.com/vicwithgg/",
  },
} as const;

// ── HERO STATS ────────────────────────────────────────────────
export const heroStats = [
  { num: "4+", label: "años de experiencia" },
  { num: "12+", label: "proyectos entregados" },
  { num: "2", label: "disciplinas: diseño + dev" },
] satisfies HeroStat[];

// ── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    slug: "sicroa",
    name: "SiCROA",
    sector: "Gobierno · Aeronáutica",
    description:
      "Sistema de seguimiento de operaciones aeronáuticas para el Hangar Oficial del Gobierno del Estado de Oaxaca. Módulos de personal, capacitaciones y documentos.",
    thumbnail:
      "https://placehold.co/600x400/0b0f18/d9a84e?text=SiCROA&font=roboto",
    tech: ["React", "TypeScript", "TanStack Query", "Zod", "FSD"],
    links: {
      figma: "#",
      github: "#",
      live: "#",
    },
    featured: true,
    type: "app" as const,
  },
  {
    slug: "altos-homepage",
    name: "Altos Ingeniería",
    sector: "Electricidad Industrial",
    description:
      "Homepage corporativa para Altos Ingeniería Eléctrica. Incluye paquete Wix Studio y style guide interactivo HTML para handoff.",
    thumbnail:
      "https://placehold.co/600x400/0b0f18/d9a84e?text=Altos+Ingeniería&font=roboto",
    tech: ["Wix Studio", "HTML", "CSS", "Figma"],
    links: {
      figma: "",
      github: "",
      live: "https://altos.co",
    },
    featured: true,
    type: "web" as const,
  },
  /*   {
    slug: "altos-design-system",
    name: "Altos Design System",
    sector: "Design Systems",
    description:
      "Sistema de diseño completo en Figma con taxonomía Category/Role/Size para tokens tipográficos, variables semánticas y modo oscuro.",
    thumbnail: "https://placehold.net/default.png",
    tech: ["Figma", "Design Tokens", "Variables", "Auto Layout"],
    links: {
      figma: "",
    },
    featured: true,
    type: "design" as const,
  }, */
  {
    slug: "taaniilaaz-muneco-chocolate",
    name: "Taaniilaaz y Muñeco de Chocolate",
    sector: "UI/UX Design • Branding",
    description:
      "Rediseño completo de interfaz de usuario (UI/UX) y diseño de identidad visual.",
    thumbnail:
      "https://placehold.co/600x400/0b0f18/3a7bd5?text=Taaniilaaz&font=roboto",
    tech: ["Figma", "UX/UI", "Responsive Design"],
    links: {
      live: "#",
    },
    featured: false,
    type: "design" as const,
  },
  {
    slug: "vallemio-shop",
    name: "ValleMio.shop",
    sector: "E-commerce • Web",
    description:
      "Creación de sitio web comercial, participando en la arquitectura web y diseño UI.",
    thumbnail:
      "https://placehold.co/600x400/0b0f18/d9a84e?text=ValleMio&font=roboto",
    tech: ["Figma", "UX/UI", "Frontend"],
    links: {
      live: "#",
    },
    featured: false,
    type: "web" as const,
  },
  {
    slug: "spotify-clone",
    name: "Spotify Clone",
    sector: "Web App • Clone",
    description:
      "Réplica funcional de la interfaz de Spotify con tecnologías modernas.",
    thumbnail:
      "https://placehold.co/600x400/0b0f18/3a7bd5?text=Spotify+Clone&font=roboto",
    tech: ["Astro", "React", "Tailwind CSS", "Frontend"],
    links: {
      live: "#",
      github: "https://github.com/Francisco-0510",
    },
    featured: false,
    type: "app" as const,
  },
  {
    slug: "vicwithgg-portfolio",
    name: "VicWithGG Portafolio Web",
    sector: "Portafolio • Web",
    description: "Portafolio personal con Astro, Tailwind CSS y Vercel.",
    thumbnail: "/images/projects/vicwithgg-cover.webp",
    tech: ["HTML5", "React", "Astro", "Tailwind CSS", "Vercel", "GitHub"],
    links: {
      live: "#",
      github: "https://github.com/Francisco-0510/vicwithgg-portfolio",
    },
    featured: false,
    type: "web" as const,
  },
  {
    slug: "vgg-movies-search",
    name: "VGG Movies Search",
    sector: "Web App • Entretenimiento",
    description:
      "App para explorar y guardar películas favoritas, usando Firebase.",
    thumbnail: "/images/projects/vgg-movie.webp",
    tech: ["React", "Chakra UI", "Firebase", "Vercel", "GitHub"],
    links: {
      live: "https://vgg-movie-search.vercel.app/",
      github: "https://github.com/Francisco-0510/movie-app-react",
    },
    featured: false,
    type: "app" as const,
  },
  {
    slug: "cv-minimalista",
    name: "CV Minimalista (Web y PDF)",
    sector: "Web • Herramienta",
    description: "CV minimalista en Web y PDF, configurable con JSON.",
    thumbnail: "/images/projects/thumbnail-cv.webp",
    tech: ["Figma", "Design System", "UX/UI", "Responsive Design"],
    links: {
      live: "https://vicwithgg.netlify.app/",
      github: "https://github.com/Francisco-0510/minimalist-portfolio",
    },
    featured: false,
    type: "web" as const,
  },
  {
    slug: "vg-design-ui-kit",
    name: "VG Design UI Kit",
    sector: "Design Systems • UI Kit",
    description: "Kit de diseño UI/UX en Figma.",
    thumbnail: "/images/projects/thumbnail-vg.webp",
    tech: ["Figma", "Design System", "Responsive Design", "UX/UI"],
    links: {
      live: "https://www.figma.com/community/file/1273539501651863397/vg-design-ui-kit-v1-10",
      figma:
        "https://www.figma.com/community/file/1273539501651863397/vg-design-ui-kit-v1-10",
    },
    featured: false,
    type: "design" as const,
  },
  {
    slug: "hospital-angel-del-mar",
    name: "Hospital Ángel del Mar",
    sector: "Salud • Web",
    description: "Rediseño UI/UX e implementación en Webflow.",
    thumbnail: "/images/projects/thumbnail-ham.webp",
    tech: ["Figma", "Design System", "Webflow", "UX/UI", "Responsive Design"],
    links: {
      live: "https://hospitalangeldelmar.com.mx/",
    },
    featured: false,
    type: "web" as const,
  },
  {
    slug: "seguridad-privada-betaj",
    name: "Seguridad Privada BETAJ",
    sector: "Corporativo • Web",
    description: "Diseño de interfaces y desarrollo en Webflow.",
    thumbnail: "/images/projects/thumbnail-betaj.webp",
    tech: ["HTML5", "React", "Webflow"],
    links: {
      live: "https://betaj.mx/",
    },
    featured: false,
    type: "web" as const,
  },
  {
    slug: "portafolio-braquetes",
    name: "Portafolio braquetes.com.mx",
    sector: "Portafolio • Web",
    description: "Portafolio web para programador backend.",
    thumbnail: "/images/projects/coverBR.webp",
    tech: ["HTML5", "Bootstrap"],
    links: {
      live: "https://www.braquetes.com.mx/#/",
    },
    featured: false,
    type: "web" as const,
  },
  {
    slug: "diseno-sistema-gestion-actividades",
    name: "Diseño de Sistema Web de Gestión de Actividades",
    sector: "UI/UX Design • Educación",
    description: "Investigación y diseño UX/UI para sistema web.",
    thumbnail: "/images/projects/thumbnail-tutoriasDesign.webp",
    tech: ["Figma", "UX/UI", "Design System"],
    links: {
      live: "https://www.figma.com/community/file/1205620325712950079",
      figma: "https://www.figma.com/community/file/1205620325712950079",
    },
    featured: false,
    type: "design" as const,
  },
  {
    slug: "desarrollo-sistema-gestion-actividades",
    name: "Desarrollo Front-end de Sistema Web de Gestión de Actividades",
    sector: "Web App • Educación",
    description: "Desarrollo frontend con Ionic para sistema UTVCO.",
    thumbnail: "/images/projects/thumbnail-tutoriasDev.webp",
    tech: ["HTML5", "Ionic", "TypeScript"],
    links: {
      live: "https://github.com/Francisco-0510/plataformaEstadias",
      github: "https://github.com/Francisco-0510/plataformaEstadias",
    },
    featured: false,
    type: "app" as const,
  },
  {
    slug: "rediseño-app-healthcheck",
    name: "Rediseño App HealthCheck",
    sector: "UI/UX Design • Salud",
    description: "Rediseño de app HealthCheck para dispositivos móviles.",
    thumbnail: "/images/projects/thumbnail-rediseño.webp",
    tech: ["Figma", "UX/UI", "Design System"],
    links: {
      figma: "https://www.figma.com/community/file/1283078639346112182",
    },
    featured: false,
    type: "design" as const,
  },
  {
    slug: "app-healthcheck-smartwatch",
    name: "App Healthcheck - Smartwatch y Mobile",
    sector: "UI/UX Design • Wearables",
    description: "App de seguimiento de salud para móviles y wearables.",
    thumbnail: "/images/projects/thumbnail-healtcheck.webp",
    tech: ["Figma", "UX/UI"],
    links: {
      live: "https://www.figma.com/community/file/1270644133161232117",
      figma: "https://www.figma.com/community/file/1270644133161232117",
    },
    featured: false,
    type: "design" as const,
  },
  {
    slug: "arquitectura-ux-healthcheck",
    name: "Arquitectura y UX de app HealthCheck",
    sector: "Arquitectura de Información • UX",
    description: "Mapas de navegación y wireflows para HealthCheck.",
    thumbnail: "/images/projects/thumbnail-arqH.webp",
    tech: ["Figma", "UX/UI"],
    links: {
      live: "https://www.figma.com/community/file/1125658163306261422",
      figma: "https://www.figma.com/community/file/1125658163306261422",
    },
    featured: false,
    type: "design" as const,
  },
  {
    slug: "bit-tournament-2023",
    name: "BIT Tournament 2023",
    sector: "Web App • Esports",
    description: "Diseño UI y desarrollo frontend en Angular.",
    thumbnail: "/images/projects/thumbnail-BIT.webp",
    tech: ["Angular", "TypeScript", "Frontend"],
    links: {
      live: "https://github.com/Francisco-0510/BIT-TOURNAMENT-2023",
      figma:
        "https://www.figma.com/community/file/1165464149403530205/diseno-de-interfaces-bit-tournament-2023",
      github: "https://github.com/Francisco-0510/BIT-TOURNAMENT-2023",
    },
    featured: false,
    type: "app" as const,
  },
  {
    slug: "user-story-mapping-bit-tournament",
    name: "User Story Mapping - BIT TOURNAMENT 2023",
    sector: "UX Research • Agile",
    description:
      "Historias de usuario y mapas de navegación para BIT Tournament.",
    thumbnail: "/images/projects/thumbnail-storyBIT.webp",
    tech: ["Figma", "UX/UI"],
    links: {
      live: "https://www.figma.com/community/file/1183832840468301220/user-story-mapping-bit-tournament-2023",
      figma:
        "https://www.figma.com/community/file/1183832840468301220/user-story-mapping-bit-tournament-2023",
    },
    featured: false,
    type: "design" as const,
  },
  {
    slug: "sistema-boletos-solteca",
    name: "Sistema Venta de Boletos La Solteca",
    sector: "Web App • Transporte",
    description: "Diseño y desarrollo de sistema de venta de boletos.",
    thumbnail: "/images/projects/thumbnail-soltecaDesign.webp",
    tech: ["Angular", "TypeScript", "UX/UI"],
    links: {
      live: "https://xd.adobe.com/view/5b7241f4-f464-4276-69b2-89a327b55523-2d43/",
      github: "https://github.com/Francisco-0510/Solteca",
    },
    featured: false,
    type: "app" as const,
  },
] satisfies Project[];

// ── EXPERIENCE ────────────────────────────────────────────────
export const experience = [
  /* {
    role: "UX/UI Designer & Frontend Developer",
    company: "Altos Ingeniería Eléctrica",
    logo: "/images/experience/altos-logo.png",
    period: "2023 — Presente",
    description:
      "Diseño y desarrollo del sistema de identidad digital, design system y productos web de la empresa. Responsable del pipeline completo Figma → producción.",
    tags: ["Design Systems", "React", "Astro", "Figma"],
  }, */
  // SiCROA
  {
    role: "Diseñador UX/UI y Desarrollador Frontend",
    company: "Hangar Oficial, Gobierno de Oaxaca",
    logo: "/images/experience/hangar.jpg",
    period: "Octubre 2025 - Marzo 2026",
    description:
      "Lideré el rediseño integral UX/UI para simplificar procesos aeronáuticos de mantenimiento y despacho, transformando flujos complejos en interfaces intuitivas mediante prototipado de alta fidelidad. Arquitecté desde cero un sistema de diseño escalable con componentes y tokens visuales, optimizando los tiempos de entrega. En el área de ingeniería, comandé la implementación frontend con React 19, TypeScript y Vite bajo una arquitectura modular pixel-perfect. Además, robustecí la lógica de negocio mediante sistemas de navegación transversal y la refactorización de seguridad con RBAC y gestión de sesiones optimizada.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Design Systems",
      "RBAC",
      "UX/UI Design",
      "Figma",
      "Aeronautical Software",
      "Architecture",
    ],
  },
  // Vision Creativa
  {
    role: "Diseñador y Desarrollador Web",
    company: "Visión Creativa",
    logo: "",
    period: "Agosto 2024 - Mayo 2025",
    description:
      "Lideré la estrategia digital y el rediseño UX/UI para marcas comerciales como Taaniilaaz y Muñeco de Chocolate, optimizando la arquitectura de información y la navegación para maximizar la retención de usuarios. Mi rol integró la conceptualización de identidades visuales con el desarrollo técnico de plataformas, colaborando activamente en la creación del e-commerce ValleMío.shop, donde alineé la estética de marca con funcionalidades orientadas a la conversión y ventas online.",
    tags: [
      "E-commerce",
      "UX/UI Design",
      "Brand Identity",
      "Information Architecture",
      "Digital Strategy",
      "User Retention",
      "Shopify / Webflow",
      "Visual Design",
    ],
  },
  // VGG Design - Designer
  {
    role: "Diseñador UX/UI y Desarrollador Web",
    company: "VGG Desarrollo y Diseño (Marca Personal)",
    logo: "/images/experience/vgg-logo.png",
    period: "2022 - Presente",
    description:
      "Desde 2022, bajo mi marca personal en Oaxaca, México, me he especializado en la convergencia entre el diseño estratégico y el desarrollo de alto rendimiento. Optimicé drásticamente los flujos de trabajo mediante la creación del 'VG Design UI KIT' en Figma, logrando una reducción del 60% en tiempos de entrega. Mi enfoque técnico se centra en arquitecturas modernas y multi-framework; he desarrollado productos complejos como una réplica funcional de Spotify —integrando Astro, React y Svelte— y la plataforma VGG Movies con Firebase. Además, diseño soluciones empresariales orientadas a la conversión, desde sistemas de boletaje personalizados para clientes como 'La Solteca' hasta sitios de alto impacto visual en Webflow.",
    tags: [
      "Astro",
      "React",
      "Svelte",
      "Figma",
      "Design Systems",
      "Firebase",
      "TypeScript",
      "UX/UI Design",
      "Webflow",
      "Performance Optimization",
    ],
  },
  // NIREJ
  {
    role: "Diseñador UX/UI y Desarrollador Web",
    company: "Grupo Empresarial NIREJ",
    logo: "/images/experience/nirej.png",
    period: "Octubre 2023 - Enero 2024",
    description:
      "Coordiné equipos multidisciplinarios bajo metodologías ágiles para transformar necesidades de negocio en soluciones de diseño estratégico. Lideré el rediseño integral del Hospital Ángel del Mar, ejecutando desde la investigación UX hasta el desarrollo final en Webflow. Asimismo, impulsé la presencia digital de la marca mediante el desarrollo del sitio web de BETAJ, landing pages de alta conversión para talleres de innovación y la creación de sistemas de email marketing corporativo con un enfoque riguroso en la identidad de marca y compatibilidad multidispositivo.",
    tags: [
      "UX Research",
      "UI Design",
      "Webflow",
      "Agile",
      "Project Coordination",
      "Landing Pages",
      "Email Design",
      "Responsive Design",
      "Strategy",
    ],
  },
  // UTVCO
  {
    role: "Diseñador UX/UI y Desarrollador Web",
    company:
      "Universidad Tecnológica de los Valles Centrales de Oaxaca (UTVCO)",
    logo: "/images/experience/utvco.jpg",
    period: "2019 - 2023",
    description:
      "Lideré estrategias de diseño centrado en el usuario (UCD) para proyectos institucionales de alto impacto, asegurando estándares visuales de excelencia y optimización de entregas. Destaco el rediseño integral de la plataforma HealthCheck, donde realicé el UX Research y la interfaz para ecosistemas móviles y wearables. Asimismo, diseñé y desarrollé el front-end del BIT Tournament 2023 utilizando Angular y Figma, priorizando la arquitectura de información y mapas de navegación. Además, implementé sistemas de gestión de actividades en Ionic, enfocándome en la accesibilidad y el rendimiento de las interfaces.",
    tags: [
      "Angular",
      "Ionic",
      "UX Research",
      "Wearables",
      "Mobile Design",
      "UCD",
      "Figma",
      "Accessibility",
      "Front-end Development",
    ],
  },
  // Zapotal
  {
    role: "",
    company: "",
    logo: "",
    period: "",
    description: "",
    tags: [],
  },
] satisfies ExperienceItem[];

// ── TYPES ─────────────────────────────────────────────────────
export interface StackCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface TechLogo {
  name: string;
  type: string;
  logo: string;
}

// ── STACK / SKILLS ────────────────────────────────────────────
export const stackCategories = [
  {
    title: "Diseño de Producto (UX/UI)",
    icon: "design",
    skills: [
      "Figma (Advanced)",
      "Design Systems & Atomic Design",
      "UX Research & Heuristics",
      "Prototyping (High-Fidelity)",
      "Design Tokens & Variables",
    ],
  },
  {
    title: "Ingeniería Frontend",
    icon: "code",
    skills: [
      "React 19 & Next.js",
      "Astro (Performance Focus)",
      "TypeScript (Advanced)",
      "Tailwind CSS & PostCSS",
      "Angular & Ionic",
    ],
  },
  {
    title: "Estrategia & Gestión",
    icon: "strategy",
    skills: [
      "Agile (Scrum/Kanban)",
      "Product Thinking",
      "Information Architecture",
      "Bridge Role (Design-Dev)",
      "Technical Documentation",
    ],
  },
  {
    title: "Tooling & Cloud",
    icon: "tools",
    skills: [
      "Vite & Node.js",
      "Git (GitHub/GitLab)",
      "Firebase & REST APIs",
      "Webflow & Shopify",
      "Jira / Asana",
    ],
  },
] satisfies StackCategory[];

export const techLogos = [
  { name: "React 19", type: "Library", logo: "/images/stack/react.svg" },
  {
    name: "TypeScript",
    type: "Language",
    logo: "/images/stack/typescript.svg",
  },
  { name: "Astro", type: "Framework", logo: "/images/stack/astro.svg" },
  { name: "Figma", type: "Design", logo: "/images/stack/figma.svg" },
  { name: "Tailwind CSS", type: "Styling", logo: "/images/stack/tailwind.svg" },
  { name: "Git", type: "Version Control", logo: "/images/stack/gi.svg" },
  { name: "Angular", type: "Framework", logo: "/images/stack/angular.svg" },
  { name: "Webflow", type: "No-Code", logo: "/images/stack/webflow.svg" },
] satisfies TechLogo[];

// ── STACK / SKILLS ────────────────────────────────────────────
/* export const stackCategories = [
  {
    title: "Diseño",
    icon: "design",
    skills: [
      "Figma",
      "Design Systems",
      "UX Research",
      "Prototyping",
      "Variables & Tokens",
    ],
  },
  {
    title: "Frontend",
    icon: "code",
    skills: ["React", "TypeScript", "Astro", "TailwindCSS", "HTML / CSS"],
  },
  {
    title: "Data & Forms",
    icon: "data",
    skills: [
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "REST APIs",
      "OpenAPI",
    ],
  },
  {
    title: "Tooling",
    icon: "tools",
    skills: ["Obsidian", "Git / GitHub", "Vite", "Wix Studio", "Netlify"],
  },
] satisfies StackCategory[];

export const techLogos = [
  { name: "React", type: "Frontend", logo: "/images/stack/react.svg" },
  {
    name: "TypeScript",
    type: "Language",
    logo: "/images/stack/typescript.svg",
  },
  { name: "Astro", type: "Framework", logo: "/images/stack/astro.svg" },
  { name: "Figma", type: "Design", logo: "/images/stack/figma.svg" },
  { name: "Tailwind", type: "Styling", logo: "/images/stack/tailwind.svg" },
  { name: "Zod", type: "Validation", logo: "/images/stack/zod.svg" },
] satisfies TechLogo[];
 */

// ── CERTIFICATES ──────────────────────────────────────────────
export const certificates = [
  {
    title: "Certificado profesional de Diseño de experiencia del usuario (UX)",
    org: "Google",
    date: "Noviembre 2024",
    logo: "/images/certs/google.png",
    url: "",
  },
  {
    title: "Figma Avanzado: Sistemas de Diseño y Prototipado",
    org: "LinkedIn Learning",
    date: "Noviembre 2024",
    logo: "/images/certs/linkedin.png",
    url: "",
  },
  {
    title: "Certificación Profesional de Scrum Foundation - SFPC™",
    org: "CertiProf",
    date: "Octubre 2024",
    logo: "/images/certs/certiprof.png",
    url: "",
  },
  {
    title: "Introducción a la Ciberseguridad",
    org: "Cisco Networking Academy",
    date: "Septiembre 2021",
    logo: "/images/certs/cisco.png",
    url: "",
  },
  {
    title: "CCNA R&S: Fundamentos de enrutamiento y conmutación",
    org: "Cisco Networking Academy",
    date: "Diciembre 2020",
    logo: "/images/certs/cisco.png",
    url: "",
  },
  {
    title: "Introducción al IoT",
    org: "Cisco Networking Academy",
    date: "Septiembre 2020",
    logo: "/images/certs/cisco.png",
    url: "",
  },
  {
    title: "Fundamentos de TI: hardware y software de PC",
    org: "Cisco Networking Academy",
    date: "Agosto 2020",
    logo: "/images/certs/cisco.png",
    url: "",
  },
] satisfies Certificate[];

// ── EDUCATION ─────────────────────────────────────────────────
export const education = [
  {
    degree: "Ingeniería en Desarrollo y Gestión de Software Multiplataforma",
    school: "Universidad Tecnológica de los Valles Centrales de Oaxaca (UTVCO)",
    period: "2021 — 2023",
    logo: "/images/edu/utvco.png",
  },
  {
    degree:
      "Técnico Superior Universitario (T.S.U) en Tecnologías de la Información",
    school: "Universidad Tecnológica de los Valles Centrales de Oaxaca (UTVCO)",
    period: "2019 — 2021",
    logo: "/images/edu/utvco.png",
  },
] satisfies EducationItem[];

// ── NAVIGATION ────────────────────────────────────────────────
export const navLinks = [
  { label: "Proyectos", href: "/#projects" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "Sobre mí", href: "/#about" },
] as const;

// ═══════════════════════════════════════════════════════════════
//  TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════
export interface HeroStat {
  num: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  sector: string;
  description: string;
  thumbnail: string;
  tech: string[];
  links: { figma?: string; github?: string; live?: string };
  featured: boolean;
  type: "app" | "web" | "design";
}

export interface ExperienceItem {
  role: string;
  company: string;
  logo: string;
  period: string;
  description: string;
  tags: string[];
}

export interface StackCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface TechLogo {
  name: string;
  type: string;
  logo: string;
}

export interface Certificate {
  title: string;
  org: string;
  date: string;
  logo: string;
  url: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  logo: string;
}
