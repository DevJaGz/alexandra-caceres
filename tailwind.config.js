/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#FDF4FF",
          100: "#FBE8FF",
          200: "#F6D0FE",
          300: "#F2ABFC",
          400: "#EB79F9",
          500: "#DD46EF",
          600: "#BE25CC",
          700: "#A61CAF",
          800: "#89198F",
          900: "#721A75",
          950: "#721A75",
        },
        primary: {
          50: "#EAEAEA",
          100: "#C4C4C4",
          200: "#ADADAD",
          300: "#8C8C8C",
          400: "#636363",
          500: "#4A4A4A",
          600: "#383838",
          700: "#2B2B2B",
          800: "#212121",
          900: "#1A1A1A",
          950: "#171717",
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

