/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(233, 26%, 24%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',

        'Grayish-Blue': 'hsl(233, 8%, 62%)',
        'Light-Grayish Blue': 'hsl(220, 16%, 96%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)',

      },
    },
  },
  plugins: [],
}