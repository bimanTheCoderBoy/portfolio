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
         'c-img-card': '0 0px 0px 10px #94a3b8',
         'c-img-card-gray': '-7px 33px 60px 10px #94a3b8',
        //  'c-img-card-gray-hover': '7px 18px 60px 10px #94a3b8',
        'c-img-card-gray-hover': '5px 10px 60px 10px #94a3b8',
         'c-nav':'0 0px 20px 5px #cbd5e1'
      }
    },
  },
  plugins: [],
}

