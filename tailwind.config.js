const colors = require("./src/stories/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,stories.tsx,js}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
