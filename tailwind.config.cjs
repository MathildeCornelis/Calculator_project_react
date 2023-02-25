/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        calc : '#8132ba'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}