/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-600": "#518CE4",
        "red-400": "#FF836D",
        "yellow-300": "#FFD166",
        "pink-300": "#F6C3B1",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        "700sm": "700px",
        "968sm": "968px",
        "1019sm": "1019px",
        "1171sm": "1171px",
        "1280sm": "1280px",
        "1344sm": "1344px",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
    // require('@tailwindcss/line-clamp'),
  ],
};
