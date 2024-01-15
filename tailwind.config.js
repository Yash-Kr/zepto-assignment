/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        primary:['Salsa', 'sans-serif'],
        secondary:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

