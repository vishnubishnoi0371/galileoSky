/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxl2: "99px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppins: ["Inter", "sans-serif"],
      },
      colors: {
        whitePrimary: "#FEFEFE",
        offwhite: "#ffffff0f",
        blackPrimary: "#010101",
        navBlur: "#fefefe2b",
        grayPrimary: "#D2D2D2",
        graySecondary: "#f7f7f7",
        gray: "#444444",
        darkRed: "#96151D",
        redSecondary: "#EB484C",
      
      },
    },
  },
  plugins: [],
};
