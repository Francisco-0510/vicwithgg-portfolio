/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // Colors - Design Tokens
      colors: {
        // Backgrounds
        bg: {
          DEFAULT: "#06080d",
          1: "#0b0f18",
          2: "#10151f",
          card: "#141921",
          "card-h": "#191e28",
        },
        // Accent colors
        accent: {
          DEFAULT: "#d9a84e",
          dim: "rgba(217, 168, 78, 0.18)",
          glow: "rgba(217, 168, 78, 0.06)",
        },
        // Blue accent
        blue: {
          DEFAULT: "#3a7bd5",
          dim: "rgba(58, 123, 213, 0.15)",
        },
        // Text colors
        text: {
          DEFAULT: "#ede9e0",
          2: "#9299a6",
          3: "#555c6a",
        },
        // Lines
        line: {
          DEFAULT: "rgba(237, 233, 224, 0.07)",
          accent: "rgba(217, 168, 78, 0.22)",
        },
      },

      // Typography
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },

      fontSize: {
        "display-xl": [
          "clamp(62px, 9vw, 128px)",
          { lineHeight: "0.92", letterSpacing: "-0.01em" },
        ],
        "display-lg": [
          "clamp(42px, 6vw, 80px)",
          { lineHeight: "0.92", letterSpacing: "-0.01em" },
        ],
        "display-md": [
          "clamp(38px, 4.5vw, 60px)",
          { lineHeight: "0.95", letterSpacing: "-0.01em" },
        ],
        "display-sm": [
          "clamp(28px, 3vw, 36px)",
          { lineHeight: "1", letterSpacing: "-0.01em" },
        ],
      },

      // Spacing
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },

      // Border radius
      borderRadius: {
        DEFAULT: "4px",
      },

      // Animations
      animation: {
        marquee: "marquee 28s linear infinite",
        "scroll-pulse": "scroll-pulse 2.2s ease-in-out infinite",
        "fade-in": "fadeIn 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-pulse": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "translateX(-50%) translateY(0)",
          },
          "50%": {
            opacity: "1",
            transform: "translateX(-50%) translateY(6px)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // Transitions
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },

      // Backdrop blur
      backdropBlur: {
        nav: "12px",
      },

      // Z-index
      zIndex: {
        navbar: "100",
        modal: "200",
        tooltip: "300",
      },
    },
  },

  plugins: [
    // Custom plugin for additional utilities
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px rgba(237, 233, 224, 0.04)",
          color: "transparent",
        },
        ".text-stroke-accent": {
          "-webkit-text-stroke": "1px rgba(217, 168, 78, 0.06)",
          color: "transparent",
        },
        ".gradient-border": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "-2px",
            borderRadius: "inherit",
            padding: "2px",
            background: "linear-gradient(135deg, #d9a84e, #3a7bd5)",
            "-webkit-mask":
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            "-webkit-mask-composite": "xor",
            "mask-composite": "exclude",
          },
        },
        ".label-line": {
          "&::before": {
            content: '""',
            display: "inline-block",
            width: "24px",
            height: "1px",
            background: "#d9a84e",
            flexShrink: "0",
          },
        },
      });
    },
  ],
};
