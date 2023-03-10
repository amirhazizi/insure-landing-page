/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // ## Colors
      colors: {
        // ### Primary
        clDarkViolet: "hsl(256, 26%, 20%)",
        clGrayishBlue: "hsl(216, 30%, 68%)",
        // ### Neutral
        clVeryDarkViolet: "hsl(270, 9%, 17%)",
        clDarkGrayishViolet: "hsl(273, 4%, 51%)",
        clVeryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
}
