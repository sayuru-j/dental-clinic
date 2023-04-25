/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#1d3557",
        primary: "#457B9D",
        primaryLight: "#a8dadc",
        accent: "#e63946",
        pearlWhite: "#E2DFD2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
