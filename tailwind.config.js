const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "display": "var(--display-font)",
      "body": "var(--body-font)",
    },
    extend: {
      container: {
        center: true,
        padding: "3.5rem",
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        'violet': {
          DEFAULT: "#562E8F",
          '50': '#DDD5E9',
          '100': '#C7B9DA',
          '200': '#AA96C7',
          '300': '#8E74B4',
          '400': '#7251A2',
          '500': '#562E8F',
          '600': '#482677',
          '700': '#391F5F',
          '800': '#2B1748',
          '900': '#1D0F30'
        },
        'berry': {
          DEFAULT: "#3956AA",
          '50': '#D7DDEE',
          '100': '#BDC7E3',
          '200': '#9CAAD4',
          '300': '#7B8EC6',
          '400': '#5A72B8',
          '500': '#3956AA',
          '600': '#30488E',
          '700': '#263971',
          '800': '#1D2B55',
          '900': '#131D39'
        },
        'fountain': {
          DEFAULT: "#64B8C7",
          '50': '#E0F1F4',
          '100': '#CBE7EC',
          '200': '#B1DBE3',
          '300': '#98D0DA',
          '400': '#7EC4D0',
          '500': '#64B8C7',
          '600': '#5399A6',
          '700': '#437B85',
          '800': '#325C64',
          '900': '#213D42'
        },
        'graphite': '#010001',
      },
      animation: {

      },
      keyframes: {

      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
