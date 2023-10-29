/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{},
      screens: {
        'sm': '350px',
  
        'md': '760px',
  
        'lg': '1150px',

        'xl': '1400px',
      },
  },
  plugins: [],
}
