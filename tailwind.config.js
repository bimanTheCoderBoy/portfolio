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
        playfr:["Playwrite FR Moderne", "sans-serif"]
      },
      dropShadow: {
        'c-blue': '0 2px 3px skyblue',
        'c-yellow': '0 3px 5px gray',
        'c-yell': '0 2px 3px yellow',
        'c-green': '0 2px 3px green',
        'c-purple': '0 2px 3px purple',
        'c-gray': '0 2px 3px gray',
      }
    },
  },
  plugins: [],
}

