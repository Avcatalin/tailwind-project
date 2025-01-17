/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/main.js"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%", // Full width for small screens
        md: "100%", // Full width for medium screens
        lg: "1024px", // Large screens
        xl: "1264px", // Extra large screens
        "2xl": "1264px", // Keep the same for larger screens
      },
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        thinkCellLightGray: "#f8f8f8",
        thinkCellGreen: "#378F53",
        thinkCellDark: "#231F20",
        thinkCellGreenRing: "#378F53",
        thinkCellGreenBorder: "#378F53",
      },
      letterSpacing: {
        thinkCellLetterSpacing: "0.16px",
      },
    },
  },
  plugins: [],
};
