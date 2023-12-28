/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "brand-100": "#E0E1DD",
        "brand-200": "#C6CCD0",
        "brand-300": "#778DA9",
        "brand-400": "#5C7490",
        "brand-500": "#415A77",
        "brand-600": "#2E4059",
        "brand-700": "#1B263B",
        "brand-800": "#142133",
        "brand-900": "#111E2F",
        "brand-1000": "#0D1B2A",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
