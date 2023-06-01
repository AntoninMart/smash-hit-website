/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'smash-grey': '#444442',
        'smash-red': '#d34e36',
        'smash-yellow': '#f7b344',
      },
    },
  },
  plugins: [],
}