/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#202020",
        background: "#606060",
        primary: "#f3f3f3f",
        good: "#58b214",
        alert: "#ff0000",
        Highlight: "#f1a700",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
