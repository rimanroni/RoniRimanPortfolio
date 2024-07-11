/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnColor :'#FD6E0A',
        textColor :'#474747'
      }
    },
  },
  plugins: [],
}