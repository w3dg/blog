/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "brand-100": "#f8f9fa",
        "brand-200": "#e9ecef",
        "brand-300": "#dee2e6",
        "brand-400": "#ced4da",
        "brand-500": "#adb5bd",
        "brand-600": "#6c757d",
        "brand-700": "#495057",
        "brand-800": "#343a40",
        "brand-900": "#212529",
        "brand-1000": "#0b090a",
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
