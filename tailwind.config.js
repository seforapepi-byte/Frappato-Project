/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: "#DFFF3F",
        black: "#080808",
        "dark-green": "#162414",
        "warm-white": "#F4F1EA",
        stone: "#D8D1C4",
        earth: "#7A5A3A",
        wine: "#7A1F38",
        muted: "#8C8C84"
      },
      fontFamily: {
        display: ["Arial Narrow", "Impact", "Haettenschweiler", "sans-serif"],
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(230, 255, 63, 0.35), 0 24px 80px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
