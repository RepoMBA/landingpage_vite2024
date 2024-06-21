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
        "800sm": "800px",
        "968sm": "968px",
        "1019sm": "1019px",
        "1171sm": "1171px",
        "1200sm": "1200px",
        "1280sm": "1280px",
        "1344sm": "1344px",
        "1350sm": "1350px",
      },
    },
  },
  plugins: [
    function ({ addComponents, addUtilities }) {
      // Adding the base styles for `.headingunderline`
      const newUtilities = {
        ".headingunderline": {
          position: "relative",
          display: "inline-block",
          marginLeft: "0.2em",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);

      // Adjusting the `addComponents` for the pseudo-element
      addComponents({
        ".headingunderline::before": {
          content: '""',
          position: "absolute",
          width: "210px", // Default width
          height: "0.4em",
          bottom: "4px",
          left: "-0.15em",
          zIndex: "-1",
          borderRadius: "2em",
          transition: "width 0.5s ease-in-out",
          background: "linear-gradient(270deg, #fa826c 0%, #ffc1ae 100%)",
        },
      });
    },
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
    // require('@tailwindcss/line-clamp'),
  ],
};
