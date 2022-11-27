/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  lighMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    fontFamily: {
      'lora': ['Lora', 'serif'],
      'DMmono': ['DM Mono', 'monospace'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Inter': ['Inter', 'serif'],
      'Caveat': ['Caveat', 'cursive'],
      'ComicNeue': ['Comic Neue', 'sans-serif'],
      'Nunito': ['Nunito', 'serif'],
      'Varela': ['Varela Round', 'sans-serif'],
      'Outfit': ['Outfit', 'sans-serif']
    },
    extend: {

    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography"), require("daisyui")],
}