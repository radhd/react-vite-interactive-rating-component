/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(25,97%,53%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralLightGrey: "hsl(217, 12%, 63%)",
        neutralMediumGrey: "hsl(216, 12%, 54%)",
        neutralDarkBlue: "hsl(213, 19%, 18%)",
        neutralVeryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
