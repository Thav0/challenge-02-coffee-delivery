/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#8047F8',
        'base-text': '#574F4D',
        'base-card': '#F3F2F2',
        'yellow-dark': '#C47F17',
        'yellow-light': '#F1E9C9',
        'purple-light': '#EBE5F9',
        'purple-dark': '#4B2995'
      }
    },
  },
  plugins: [],
}
