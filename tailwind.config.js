/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tailwind-gradient-mask-image"),
    require("tailwind-scrollbar")
  ],
}

