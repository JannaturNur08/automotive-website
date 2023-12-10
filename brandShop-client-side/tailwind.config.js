/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald :"'Oswald', sans-serif " ,
        roboto : "'Roboto', sans-serif "

      },
      colors : {
        primary : "#EE1243",
      },
      textColor : {
        secondary : "#FFFFFF",
      }
    },
  },
  plugins: [require("daisyui")],
}

