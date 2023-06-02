/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'smash-grey': '#212121',
        'smash-red': '#d73131',
        'smash-yellow': '#ffab00',
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