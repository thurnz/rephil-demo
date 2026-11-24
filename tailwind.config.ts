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
        // Core brand colors
        "brand-red": "#FF002E",
        "brand-navy": "#001C54",
        "brand-sun": "#FEF03C",
        "brand-orange": "#E0832C",
        "brand-indigo": "#1B0785",
        "brand-blue": "#2B46B3",

        // Semantic & mockup background tokens
        ink: "#0C0B1E",
        surface: "#15122F",
        "navy-900": "#010F32",
        "navy-800": "#021A54",
        "navy-600": "#17316F",
        "red-500": "#F02A39",
        "red-600": "#DC2634",

        // Values gradient stops
        "values-r": "#1E0C84",
        "values-e": "#4A0C78",
        "values-p": "#8C1562",
        "values-h": "#CA224F",
        "values-i": "#F02A39",
        "values-l": "#F9992F",

        // Hero gradient stops
        "hero-start": "#0D1369",
        "hero-mid": "#5F0C70",
        "hero-end": "#BD1F50",

        // Semantic aliases
        primary: "#FF002E",
        accent: "#FEF03C",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0D1369 0%, #5F0C70 50%, #BD1F50 100%)",
        "header-gradient": "linear-gradient(90deg, #1B0785 0%, #760F65 50%, #E62243 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
