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
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
