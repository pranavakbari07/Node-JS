/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#c9a227',
        'accent-hover': '#e0b83d',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
