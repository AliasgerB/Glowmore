/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF", //white
        accent: "#973131", // red
        textLight: "#1A1A1D", // black
      },
    },
  },
  plugins: [],
};
