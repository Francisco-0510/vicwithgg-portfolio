let revealObserver: IntersectionObserver | undefined;
let scrollHandler: (() => void) | undefined;
let scrollTicking = false;

function cleanupSite() {
  revealObserver?.disconnect();
  revealObserver = undefined;

  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = undefined;
  }

  scrollTicking = false;
}

function setupRevealAnimations() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const element = entry.target as HTMLElement;
        element.classList.add("visible");
        revealObserver?.unobserve(element);
      }
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  document
    .querySelectorAll<HTMLElement>(".reveal:not(.visible)")
    .forEach((element) => revealObserver?.observe(element));
}

function setupNavbar() {
  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  scrollHandler = () => {
    if (scrollTicking) return;

    scrollTicking = true;

    requestAnimationFrame(() => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
      scrollTicking = false;
    });
  };

  window.addEventListener("scroll", scrollHandler, {
    passive: true,
  });

  scrollHandler();
}

function setupSmoothAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));

      if (!target) return;

      event.preventDefault();
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      history.pushState(null, "", href);
    });
  });
}

function setupCopyButtons() {
  document.querySelectorAll("pre").forEach((pre) => {
    if (pre.querySelector(".copy-btn")) return;

    const button = document.createElement("button");

    button.type = "button";
    button.className = "copy-btn";
    button.setAttribute("aria-label", "Copiar código");
    button.textContent = "Copiar";

    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.textContent ?? "";

      try {
        await navigator.clipboard.writeText(code);

        button.textContent = "¡Copiado!";
        button.classList.add("copied");

        window.setTimeout(() => {
          button.textContent = "Copiar";
          button.classList.remove("copied");
        }, 2000);
      } catch {
        button.textContent = "Error";
      }
    });

    pre.style.position = "relative";
    pre.appendChild(button);
  });
}

function initSite() {
  cleanupSite();
  setupRevealAnimations();
  setupNavbar();
  setupSmoothAnchors();
  setupCopyButtons();
}

document.addEventListener("astro:before-swap", cleanupSite);
document.addEventListener("astro:page-load", initSite);

initSite();
