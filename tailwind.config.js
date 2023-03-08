/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    listStyleType: {
      sign: '"- "',
    },
    fontFamily: {
      body: ['Encode Sans', 'sans-serif'],
      heading: ['Jost', 'sans-serif'],
    },
  },
};
