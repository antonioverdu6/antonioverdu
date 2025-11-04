/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0b0f14',
        'panel': '#0f1720',
        'accent-blue': '#00e5ff',
        'accent-green': '#bfff00'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
