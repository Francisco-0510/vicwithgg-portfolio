/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Onest Variable", ...fontFamily.sans],
      serif: ["Onest Variable", "Inter", "Satoshi", "Arial", "serif"],
    },
    extend: {
      colors: {
        // Ajustamos los grises para garantizar legibilidad
        neutral: {
          400: "#94a3b8", // Insuficiente para texto en blanco
          500: "#737373", // Límite (Revisar)
          600: "#525252", // Seguro para texto (Ratio > 4.5:1)
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
