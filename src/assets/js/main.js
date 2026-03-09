/**
 * Lógica principal del Portafolio
 * Maneja: Sticky Header, Dark Mode, Menú Móvil y Back to Top
 */

// --- Utilidad para alto rendimiento ---
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

    // 1. Manejo del Header
    headerInner?.classList.toggle("border-transparent", !isScroll);
    if (isScroll) {
      headerInner?.classList.add(...HEADER_GLASS);
      header.classList.replace("absolute", "fixed");
      header.classList.replace("h-20", "h-14");
      menu?.classList.replace("top-[75px]", "top-[56px]");
    } else {
      headerInner?.classList.remove(...HEADER_GLASS);
      header.classList.replace("fixed", "absolute");
      header.classList.replace("h-14", "h-20");
      menu?.classList.replace("top-[56px]", "top-[75px]");
    }

    // 2. Manejo del Botón Volver Arriba
    if (backToTopBtn && projectsSection) {
      const projectsPosition = projectsSection.offsetTop;
      const isPastProjects = scrollY > projectsPosition - 100;

      if (isPastProjects) {
        backToTopBtn.classList.remove(
          "opacity-0",
          "translate-y-20",
          "pointer-events-none",
        );
        backToTopBtn.classList.add("opacity-100", "translate-y-0");
      } else {
        backToTopBtn.classList.add(
          "opacity-0",
          "translate-y-20",
          "pointer-events-none",
        );
        backToTopBtn.classList.remove("opacity-100", "translate-y-0");
      }
    }
  };

  // --- DARK MODE LOGIC ---
  const updateThemeUI = (isDark, animate = false) => {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const dayText = document.getElementById("dayText");
    const nightText = document.getElementById("nightText");

    if (!sun || !moon) return;

    [sun, moon].forEach((el) => el.classList.remove("setting", "rising"));
    const delay = animate ? 500 : 0;

    if (animate) {
      const exiting = isDark ? sun : moon;
      exiting.classList.add("setting");
    }

    setTimeout(() => {
      if (isDark) {
        document.documentElement.classList.add("dark");
        sun.classList.add("hidden");
        moon.classList.remove("hidden");
        if (animate) moon.classList.add("rising");
        dayText?.classList.add("hidden");
        nightText?.classList.remove("hidden");
      } else {
        document.documentElement.classList.remove("dark");
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
        if (animate) sun.classList.add("rising");
        nightText?.classList.add("hidden");
        dayText?.classList.remove("hidden");
      }
    }, delay);
  };

  // --- MOBILE MENU ---
  const toggleMobileMenu = (isOpen) => {
    openMenuBtn?.classList.toggle("hidden", isOpen);
    closeMenuBtn?.classList.toggle("hidden", !isOpen);
    menu?.classList.toggle("hidden", !isOpen);

    if (isOpen) {
      mobileBg?.classList.remove("hidden");
      setTimeout(() => mobileBg?.classList.remove("opacity-0"), 10);
      document.body.style.overflow = "hidden";
    } else {
      mobileBg?.classList.add("hidden", "opacity-0");
      document.body.style.overflow = "auto";
    }
  };

  // --- ACTIVE LINKS ---
  const highlightLinks = () => {
    document.querySelectorAll("#menu a").forEach((link) => {
      const isCurrent = link.pathname === window.location.pathname;
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
  updateThemeUI(localStorage.getItem("dark_mode") === "true");
};

// Reiniciar en cada navegación de Astro
document.addEventListener("astro:page-load", init);
