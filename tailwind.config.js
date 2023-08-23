/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: { 
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'xl': '16px 3px 0 0px rgba(255, 255, 255, 255)',
      }
    },
  },
  plugins: [],
}

