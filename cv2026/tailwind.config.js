import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0184ff",
              foreground: "#000000",
            },
            background: "#ffffff",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#17c964",
              foreground: "#ffffff",
            },
            focus: "#17c964",
          },
        },
      },
    }),
  ],
};