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
      colors: {
        'cornflower': {
          DEFAULT: '#7761fe',
          '50': '#f8f7ff',
          '100': '#f1efff',
          '200': '#ddd8ff',
          '300': '#c9c0ff',
          '400': '#a090fe',
          '500': '#7761fe',
          '600': '#6b57e5',
          '700': '#5949bf',
          '800': '#473a98',
          '900': '#3a307c'
        },
        'roman': {
          DEFAULT: '#df6664',
          '50': '#fdf7f7',
          '100': '#fcf0f0',
          '200': '#f7d9d8',
          '300': '#f2c2c1',
          '400': '#e99493',
          '500': '#df6664',
          '600': '#c95c5a',
          '700': '#a74d4b',
          '800': '#863d3c',
          '900': '#6d3231'
        },
        'graphite': '#010001',
        'berry': '#292158',
      },
      animation: {

      },
      keyframes: {

      }
    },
  },
  plugins: [],
}
