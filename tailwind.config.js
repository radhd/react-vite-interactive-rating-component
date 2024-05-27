/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(25,97%,53%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
