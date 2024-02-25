/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#907859',
        primaryHover: '#cbc7c0',
        primaryLighter: '#eae6e0',
        secondary: '#548F9E',
        secondaryLighter: '#cbd6d9',
        black: 'black',
        white: 'white',
      },
      fontFamily: {
        body: '"noto-serif", serif',
        title: '"bodoni-pt-variable", serif',
      },
    },
  },
  plugins: [],
  safelist: [],
};
