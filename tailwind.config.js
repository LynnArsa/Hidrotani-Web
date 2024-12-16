/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#365E32',
        },
        secondary: {
          DEFAULT: '#81A263',
        },
        main: {
          DEFAULT: '#ECF3F4',
        },
      },
    },
  },
  plugins: [],
};