/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1E90FF', // Blue highlight
      },
      width: {
        '28': '6.5rem', // Custom width
        '29': '7rem', // Custom width
        '30': '7.5rem', // Custom width
        '31': '8rem',   // Another custom width
      },
    },
  },
  plugins: [],
}

