/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      itda: ["it-da", "Noto Sans KR", "sans-serif"],
    },
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
      colors: {
        itdaPink: "#ED2A70",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
