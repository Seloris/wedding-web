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
        background: '#fafaf9',
        black: 'black',
        white: 'white',
      },
      fontFamily: {
        body: '"noto-serif", serif',
        title: '"bodoni-pt-variable", serif',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
  safelist: ['opacity-0'],
};
