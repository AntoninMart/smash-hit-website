/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'smash-white': '#E0D8C4',
        'smash-grey': '#212121',
        'smash-red': '#d73131',
        'smash-yellow': '#ffab00',
      },
      screens: {
        'xs': '475px',
        'xss': '345px',
        'xxs': '50px',
        'xxxs': '0px',
      }
    },
  },
  plugins: [],
}