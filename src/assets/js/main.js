/**
 * Lógica principal del Portafolio
 * Maneja: Sticky Header, Dark Mode, Menú Móvil y Back to Top
 */

// --- Utilidad para alto rendimiento (Corregida) ---
const throttle = (callback) => {
  let queuedCallback = null;
  return () => {
    if (!queuedCallback) {
      requestAnimationFrame(() => {
        queuedCallback();
        queuedCallback = null;
      });
    }
    queuedCallback = callback;
  };
};

const init = () => {
  // Elementos del DOM
  const header = document.getElementById("header");
  const menu = document.getElementById("menu");
  const darkToggle = document.getElementById("darkToggle");
  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
  const mobileBg = document.getElementById("mobileMenuBackground");
  const backToTopBtn = document.getElementById("back-to-top");
  const projectsSection = document.getElementById("projects");

  if (!header) return;

  const HEADER_GLASS = [
    "border-neutral-300/50",
    "bg-white/80",
    "dark:border-neutral-600/40",
    "dark:bg-neutral-900/60",
    "backdrop-blur-2xl",
  ];

  // --- LÓGICA DE SCROLL UNIFICADA ---
  const evaluateScroll = () => {
    const scrollY = window.scrollY;
    const isScroll = scrollY > 16;
    const headerInner = header.firstElementChild;

    // 1. Manejo del Header (Uso de toggle para mayor seguridad)
    headerInner?.classList.toggle("border-transparent", !isScroll);

    if (isScroll) {
      headerInner?.classList.add(...HEADER_GLASS);
      header.classList.add("fixed", "h-14");
      header.classList.remove("absolute", "h-20");
      menu?.classList.add("top-[56px]");
      menu?.classList.remove("top-[75px]");
    } else {
      headerInner?.classList.remove(...HEADER_GLASS);
      header.classList.add("absolute", "h-20");
      header.classList.remove("fixed", "h-14");
      menu?.classList.add("top-[75px]");
      menu?.classList.remove("top-[56px]");
    }

    // 2. Manejo del Botón Volver Arriba
    if (backToTopBtn && projectsSection) {
      const projectsPosition = projectsSection.offsetTop;
      const isPastProjects = scrollY > projectsPosition - 100;

      backToTopBtn.classList.toggle("opacity-0", !isPastProjects);
      backToTopBtn.classList.toggle("translate-y-20", !isPastProjects);
      backToTopBtn.classList.toggle("pointer-events-none", !isPastProjects);
      backToTopBtn.classList.toggle("opacity-100", isPastProjects);
      backToTopBtn.classList.toggle("translate-y-0", isPastProjects);
    }
  };

  // --- DARK MODE LOGIC ---
  const updateThemeUI = (isDark, animate = false) => {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    if (!sun || !moon) return;

    // Limpiar estados anteriores
    sun.classList.remove("setting", "rising");
    moon.classList.remove("setting", "rising");

    if (animate) {
      const exiting = isDark ? sun : moon;
      const entering = isDark ? moon : sun;

      // 1. Iniciar salida
      exiting.classList.add("setting");

      setTimeout(() => {
        // 2. Intercambio de visibilidad
        exiting.classList.add("hidden");
        entering.classList.remove("hidden");

        // 3. Iniciar entrada
        entering.classList.add("rising");

        // 4. Aplicar clase al HTML
        document.documentElement.classList.toggle("dark", isDark);
      }, 300); // Mitad de la duración de la animación
    } else {
      // Carga inicial sin animaciones
      document.documentElement.classList.toggle("dark", isDark);
      sun.classList.toggle("hidden", isDark);
      moon.classList.toggle("hidden", !isDark);
    }
  };

  // --- MOBILE MENU ---
  const toggleMobileMenu = (isOpen) => {
    openMenuBtn?.classList.toggle("hidden", isOpen);
    closeMenuBtn?.classList.toggle("hidden", !isOpen);
    menu?.classList.toggle("hidden", !isOpen);

    if (isOpen) {
      mobileBg?.classList.remove("hidden");
      // Forzar reflow para la transición de opacidad
      void mobileBg?.offsetWidth;
      mobileBg?.classList.remove("opacity-0");
      document.body.style.overflow = "hidden";
    } else {
      mobileBg?.classList.add("opacity-0");
      // Esperar a que termine la animación antes de ocultar
      setTimeout(() => mobileBg?.classList.add("hidden"), 300);
      document.body.style.overflow = "auto";
    }
  };

  // --- ACTIVE LINKS ---
  const highlightLinks = () => {
    document.querySelectorAll("#menu a").forEach((link) => {
      // Ajuste para comparar rutas correctamente
      const isCurrent =
        link.getAttribute("href") === window.location.pathname ||
        (link.getAttribute("href") === "/" && window.location.pathname === "");

      link.classList.toggle("text-blue-600", isCurrent);
      link.classList.toggle("dark:text-blue-400", isCurrent);
      link.classList.toggle("font-bold", isCurrent);
    });
  };

  // --- EVENT LISTENERS ---
  window.addEventListener("scroll", throttle(evaluateScroll), {
    passive: true,
  });

  darkToggle?.addEventListener("click", () => {
    const isDark = !document.documentElement.classList.contains("dark");
    localStorage.setItem("dark_mode", isDark);
    updateThemeUI(isDark, true);
  });

  openMenuBtn?.addEventListener("click", () => toggleMobileMenu(true));
  closeMenuBtn?.addEventListener("click", () => toggleMobileMenu(false));
  mobileBg?.addEventListener("click", () => toggleMobileMenu(false));

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Ejecuciones iniciales
  evaluateScroll();
  highlightLinks();

  // Preferencia guardada o del sistema
  const savedTheme = localStorage.getItem("dark_mode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark =
    savedTheme === "true" || (savedTheme === null && prefersDark);

  updateThemeUI(shouldBeDark);
};

// Reiniciar en cada navegación de Astro
document.addEventListener("astro:page-load", init);
