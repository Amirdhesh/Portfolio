/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // You can use any name you want here
        Akronim: ['Akronim'],
        IrishGover:['Irish Grover'],
        Josefin:['Josefin Slab']
      },
    },
  },
  plugins: [],
}