/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        beer: {
          50: "#fef7e0",
          100: "#fdecc8",
          200: "#fbd38d",
          300: "#f6ad55",
          400: "#ed8936",
          500: "#d69e2e",
          600: "#b7791f",
          700: "#975a16",
          800: "#744210",
          900: "#5f370e",
        },
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
