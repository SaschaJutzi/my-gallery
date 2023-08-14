/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        secondary: '#94a3b8',
        error: '#ff4a4a',
        background: '#fafafa',
        subtitle: '#94a3b8',
      },
    },
    fontFamily: {
      sans: ['Poppins'],
    },
  },
  plugins: [],
}
