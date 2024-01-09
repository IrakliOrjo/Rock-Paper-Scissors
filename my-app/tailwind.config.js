/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
        scissors: ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'], 
        rock: ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
      },
    },
  },
  plugins: [],
}