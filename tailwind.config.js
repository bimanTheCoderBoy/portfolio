/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        playfr:["Playwrite FR Moderne", "sans-serif"],
        roboto:["Roboto", "sans-serif"],
        lato:["Lato", "sans-serif"]
      },
      dropShadow: {
        'c-blue': '0 2px 3px skyblue',
        'c-yellow': '0 3px 5px gray',
        'c-yell': '0 2px 3px yellow',
        'c-green': '0 2px 3px green',
        'c-purple': '0 2px 3px purple',
        'c-gray': '0 2px 3px gray',
        'c-gray-light': '0 0px .6px gray',
      },
      colors:{
        "lightg":"#6a6b6dca",
        "deepg":"#57585A",
        "th-black":"#2e2e2e"
      },boxShadow:{
        'c-gray': '0 0px 30px #6a6b6dca',
      }
    },
  },
  plugins: [],
}

