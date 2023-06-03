/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'smash-grey': '#343232',
        'smash-red': '#D14D36',
        'smash-yellow': '#FAB400',
        'smash-white': '#E0D8C4',
      },
      screens: {
        'xs': '475px',
        'xss': '345px',
        'xxs': '50px',
      }
    },
  },
  plugins: [],
}