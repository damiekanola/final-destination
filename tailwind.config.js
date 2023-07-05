/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    minWidth: {
      '1/2': '200px'
    },
    extend: {
      spacing: {
        '85': '260px',
        '90': '300px',
        '100': '500px'
      },
      height: {
        '100': '450px'
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

