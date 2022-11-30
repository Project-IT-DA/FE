/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: { max: "640px" },
      lg: { max: "960px" },
      xl: { max: "1366px" },
      min_sm: { min: "480px" },
      min_md: { min: "640px" },
      min_lg: { min: "960px" },
      min_xl: { min: "1366px" },
    },
    extend: {
      // colors: {
      //   fontBlack: "#191919",
      //   fontGray: "#4D4D4D",
      //   fontWhite: "#EBEBEB",
      //   brandYellow: "#F4C828",
      //   brandBlue: "#4B23B8",
      //   errorColor: "#F4C828",
      //   bgWhite: "#FFFFFF",
      //   bgGray1: "#F1F1F5",
      //   bgGray2: "#F8F8FA",
      // },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
