/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppins: ["Inter", "sans-serif"],
      },
      colors: {
        whitePrimary: "#FEFEFE",
        offwhite: "#ffffff0f",
        blackPrimary: "#010101",
        grayPrimary: "#D2D2D2",
        gray: "#444444",
        tundora: "#4C4C4C",
        darkRed: "#96151D",
        cinnabar: "#EB484C",
        alto: "#DFDEDE",
      },
    },
  },
  plugins: [],
};
