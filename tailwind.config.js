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
      },
    ],
  },
}

