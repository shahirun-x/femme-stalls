import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        femme: {
          pink: {
            DEFAULT: "#E91E8B",
            50: "#FFF0F7",
            100: "#FFE0EF",
            200: "#FFB8D9",
            300: "#FF85BF",
            400: "#F472B6",
            500: "#EC4899",
            600: "#E91E8B",
            700: "#BE185D",
            800: "#9D174D",
            900: "#831843",
          },
          gold: {
            DEFAULT: "#C5A55A",
            light: "#D4AF37",
            dark: "#A68B3E",
            muted: "rgba(197, 165, 90, 0.2)",
          },
          dark: {
            DEFAULT: "#1A0A12",
            deep: "#0D0509",
            card: "#2D1420",
          },
          warm: {
            white: "#FFFBFE",
            bg: "#FDF2F8",
            border: "#F3D5E5",
          },
        },
        foreground: "#1A0A12",
        muted: {
          DEFAULT: "#F3D5E5",
          foreground: "#6B445A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      borderRadius: {
        soft: "0.75rem",
        card: "1rem",
        section: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
