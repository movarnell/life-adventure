/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['KirangHaerang', 'serif'],
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
    colors: {
      offwhite: "#fafae0",
      black: "#000000",
      gray: {
        200: "#d9d7bf",
        400: "#a1a18d",
        600: "#767b6a"
      },
      green: {
        200: "#979a69",
        400: "#606c38",
        500: "#3a4c26",
        600: "#283618"
      },
      brown: {
        200: "#efc684",
        300: "#dda15e",
        400: "#bc6c25",
        500: "#a6593f",
        600: "#6a3e41"
      },
      red: {
        200: "#bf645b",
        400: "#943c34",
        600: "#712322"
      },
      blue: {
        100: "#eafaf5",
        200: "#c6dedc",
        300: "#94b7bc",
        400: "#749fa9"
      }
    }
  },
  plugins: [],
}

