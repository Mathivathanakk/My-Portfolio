/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
        Serif: ["DM Serif Text", "serif"],
        Roboto:["Roboto Slab", "serif"]
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
};
