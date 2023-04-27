/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#e63946",
        pearlWhite: "#EAE7DC",
        // accent: "#C3073F",
        // pearlWhite: "#E3E2DF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
