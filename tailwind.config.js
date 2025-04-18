/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
import daisyui from "daisyui"
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

    },
    extend: {
    },
  },
  plugins: [daisyui], daisyui: {
    themes: [
      {
        mytheme: {
          cupcake: "cupcake",
        },
        screens: {
          '2xl': { 'max': '1535px' }, // => @media (max-width: 1535px) { ... }
          'xl': { 'max': '1279px' }, // => @media (max-width: 1279px) { ... }
          'lg': { 'max': '1023px' }, // => @media (max-width: 1023px) { ... }
          'md': { 'max': '767px' }, // => @media (max-width: 767px) { ... }
          'sm': { 'max': '639px' }, // => @media (max-width: 639px) { ... }
        }
      },
    ],
  },
}

