/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dafont: ["MyCustomFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
