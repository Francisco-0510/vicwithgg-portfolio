window.darkMode = !1;
const d = ["fixed", "h-14"],
  s = ["absolute", "h-20"],
  o = [
    "border-neutral-300/50",
    "bg-white/80",
    "dark:border-neutral-600/40",
    "dark:bg-neutral-900/60",
    "backdrop-blur-2xl",
  ],
  l = ["border-transparent"];
let n = null;
document.addEventListener("DOMContentLoaded", () => {
  (n = document.getElementById("header")),
    localStorage.getItem("dark_mode") &&
    localStorage.getItem("dark_mode") === "true"
      ? ((window.darkMode = !0), m())
      : i(),
    stickyHeaderFuncionality(),
    applyMenuItemClasses(),
    evaluateHeaderPosition(),
    a();
});
window.stickyHeaderFuncionality = () => {
  window.addEventListener("scroll", () => {
    evaluateHeaderPosition();
  });
};
window.evaluateHeaderPosition = () => {
  window.scrollY > 16
    ? (n.firstElementChild.classList.add(...o),
      n.firstElementChild.classList.remove(...l),
      n.classList.add(...d),
      n.classList.remove(...s),
      document.getElementById("menu").classList.add("top-[56px]"),
      document.getElementById("menu").classList.remove("top-[75px]"))
    : (n.firstElementChild.classList.remove(...o),
      n.firstElementChild.classList.add(...l),
      n.classList.add(...s),
      n.classList.remove(...d),
      document.getElementById("menu").classList.remove("top-[56px]"),
      document.getElementById("menu").classList.add("top-[75px]"));
};
document.getElementById("darkToggle").addEventListener("click", () => {
  document.documentElement.classList.add("duration-300"),
    document.documentElement.classList.contains("dark")
      ? (localStorage.removeItem("dark_mode"), i(!0))
      : (localStorage.setItem("dark_mode", !0), m(!0));
});
function i(t) {
  document.getElementById("sun").classList.remove("setting"),
    document.getElementById("moon").classList.remove("rising");
  let e = 0;
  t && ((e = 500), document.getElementById("moon").classList.add("setting")),
    setTimeout(() => {
      document.getElementById("dayText").classList.remove("hidden"),
        document.getElementById("nightText").classList.add("hidden"),
        document.getElementById("moon").classList.add("hidden"),
        document.getElementById("sun").classList.remove("hidden"),
        t &&
          (document.documentElement.classList.remove("dark"),
          document.getElementById("sun").classList.add("rising"));
    }, e);
}
function m(t) {
  document.getElementById("moon").classList.remove("setting"),
    document.getElementById("sun").classList.remove("rising");
  let e = 0;
  t && ((e = 500), document.getElementById("sun").classList.add("setting")),
    setTimeout(() => {
      document.getElementById("nightText").classList.remove("hidden"),
        document.getElementById("dayText").classList.add("hidden"),
        document.getElementById("sun").classList.add("hidden"),
        document.getElementById("moon").classList.remove("hidden"),
        t &&
          (document.documentElement.classList.add("dark"),
          document.getElementById("moon").classList.add("rising"));
    }, e);
}
window.applyMenuItemClasses = () => {
  const t = document.querySelectorAll("#menu a");
  for (let e = 0; e < t.length; e++)
    t[e].pathname === window.location.pathname &&
      t[e].classList.add("text-neutral-900", "dark:text-white");
};
function a() {
  document.getElementById("openMenu").addEventListener("click", () => {
    openMobileMenu();
  }),
    document.getElementById("closeMenu").addEventListener("click", () => {
      closeMobileMenu();
    });
}
window.openMobileMenu = () => {
  document.getElementById("openMenu").classList.add("hidden"),
    document.getElementById("closeMenu").classList.remove("hidden"),
    document.getElementById("menu").classList.remove("hidden"),
    document.getElementById("mobileMenuBackground").classList.add("opacity-0"),
    document.getElementById("mobileMenuBackground").classList.remove("hidden"),
    setTimeout(() => {
      document
        .getElementById("mobileMenuBackground")
        .classList.remove("opacity-0");
    }, 1);
};
window.closeMobileMenu = () => {
  document.getElementById("closeMenu").classList.add("hidden"),
    document.getElementById("openMenu").classList.remove("hidden"),
    document.getElementById("menu").classList.add("hidden"),
    document.getElementById("mobileMenuBackground").classList.add("hidden");
};
