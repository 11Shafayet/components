/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Josefin Sans'],
        secondary: ['Poppins'],
      },
      colors: {
        primary: '#ff6363',
      },
    },
  },
  plugins: [],
};
