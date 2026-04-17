// src/data/portfolio.ts
// ═══════════════════════════════════════════════════════════════
//  SINGLE SOURCE OF TRUTH — VicWithGG Portfolio Data
//  Edit this file to update all sections of the site.
// ═══════════════════════════════════════════════════════════════

// ── SITE META ────────────────────────────────────────────────
// FIX: title ya no incluye el subtítulo redundante que se duplicaba
// en BaseLayout. El title aquí es la marca, el subtítulo va en description.
export const site = {
  title: "VicWithGG | Diseñador UX/UI y Desarrollador Web",
  description:
    "Diseñador UX/UI y Desarrollador Frontend en Oaxaca, México. Creo experiencias digitales modernas, accesibles y optimizadas para rendimiento y conversión. Especializado en diseño web, UX y desarrollo frontend.",
  url: "https://vicwithgg-portfolio.vercel.app", // TODO: cambiar a dominio propio cuando esté listo
  locale: "es-MX",
  twitter: "@VicWithGG1",
  ogImage: "/og-image.jpg",
} as const;

// ── HELPERS ──────────────────────────────────────────────────

/**
 * Devuelve el array sameAs para JSON-LD Person schema.
 * Filtra automáticamente entradas vacías.
 * Uso en BaseLayout: sameAs: getSameAs()
 */
export function getSameAs(): string[] {
  // Forzamos a que los valores se traten como unknown para que el
  // predicado 'is string' sea una evolución válida.
  return (Object.values(person.social) as unknown[]).filter(
    (v): v is string => typeof v === "string" && v.startsWith("http"),
  );
}

// FIX: getSameAs() ahora es genérico — itera person.social automáticamente.
// Antes listaba cada red manualmente, por lo que agregar una red nueva
// requería editar getSameAs() además de person.social. Ya no es necesario.

// ── PERSONAL INFO ─────────────────────────────────────────────
export const person = {
  name: "Francisco Victorico Aguirre Jiménez",
  handle: "VicWithGG",
  initials: "VGG",
  location: "Oaxaca, MX",
  locationFull: "Oaxaca de Juárez, Oaxaca, México",
  roles: [
    "Diseñador UX/UI en México",
    "Desarrollador Frontend especializado en rendimiento",
  ],
  tagline:
    "Diseñador UX/UI y Desarrollador Frontend enfocado en crear experiencias digitales modernas y optimizadas",
  bio: [
    "Soy Francisco Victorico Aguirre Jiménez, Diseñador UX/UI y Desarrollador Web comprometido con crear experiencias digitales que destacan. Equilibro las necesidades del usuario con los objetivos del producto, utilizando metodologías ágiles, investigación y diseño centrado en las personas.",
    "Mi enfoque estratégico e intuitivo, junto con el dominio de herramientas avanzadas, me permite convertir ideas en soluciones innovadoras y efectivas. Siempre busco aprender, mejorar y superar nuevos desafíos.",
  ],
  availability:
    "Disponible para proyectos freelance, colaboraciones y oportunidades full-time",
  photo: "/images/me.jpg",
  email: "vgg.designer.01@gmail.com",
  social: {
    phone: "+52 1 951 391 5906",
    // FIX: phone no es una URL — getSameAs() ahora filtra por startsWith('http')
    // así que phone queda en social para uso en contacto pero no en sameAs.
    linkMe: "https://link.me/vicwithgg",
    figma: "https://www.figma.com/@vicwithgg",
    github: "https://github.com/Francisco-0510",
    linkedin: "https://www.linkedin.com/in/vicwith-gg/",
    x: "https://x.com/VicWithGG1",
    instagram: "https://www.instagram.com/vicwithgg",
  },
} as const;

// ── HERO STATS ────────────────────────────────────────────────
export const heroStats = [
  { num: "4+", label: "años de experiencia" },
  { num: "12+", label: "proyectos entregados" },
  { num: "2", label: "disciplinas: diseño + dev" },
] satisfies HeroStat[];

// ── EXPERIENCE ────────────────────────────────────────────────
export const experience = [
  {
    role: "Diseñador UX/UI y Desarrollador Frontend",
    company: "Hangar Oficial, Gobierno de Oaxaca",
    logo: "/images/experience/hangar.jpg",
    period: "Octubre 2025 - Marzo 2026",
    startDate: "2025-10-01",
    endDate: "2026-03-31",
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
  {
    role: "Diseñador y Desarrollador Web",
    company: "Visión Creativa",
    logo: "",
    period: "Agosto 2024 - Mayo 2025",
    startDate: "2024-08-01",
    endDate: "2025-05-31",
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
  {
    role: "Diseñador UX/UI y Desarrollador Web",
    company: "VGG Desarrollo y Diseño (Marca Personal)",
    logo: "/images/experience/vgg-logo.png",
    period: "2022 - Presente",
    startDate: "2022-01-01",
    endDate: null, // null = trabajo actual
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
  {
    role: "Diseñador UX/UI y Desarrollador Web",
    company: "Grupo Empresarial NIREJ",
    logo: "/images/experience/nirej.png",
    period: "Octubre 2023 - Enero 2024",
    startDate: "2023-10-01",
    endDate: "2024-01-31",
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
  {
    role: "Diseñador UX/UI y Desarrollador Web",
    company:
      "Universidad Tecnológica de los Valles Centrales de Oaxaca (UTVCO)",
    logo: "/images/experience/utvco.jpg",
    period: "2019 - 2023",
    startDate: "2019-09-01",
    endDate: "2023-06-30",
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
] satisfies ExperienceItem[];

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
  { name: "Git", type: "Version Control", logo: "/images/stack/git.svg" },
  { name: "Angular", type: "Framework", logo: "/images/stack/angular.svg" },
  { name: "Webflow", type: "No-Code", logo: "/images/stack/webflow.svg" },
] satisfies TechLogo[];

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

// FIX: eliminada la declaración duplicada de TechLogo que existía en el original
export interface ExperienceItem {
  role: string;
  company: string;
  logo?: string;
  period: string;
  description: string;
  startDate: string; // ISO 8601: "2025-10-01"
  endDate: string | null; // null = trabajo actual
  tags: string[];
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
