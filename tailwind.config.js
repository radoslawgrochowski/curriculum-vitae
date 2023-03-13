const defaultConfig = require('tailwindcss/defaultConfig')

const mapValuesToPt = (themeProperty) => {
  return Object.fromEntries(Object.entries(themeProperty).map((array) => {
    const [key, value] = array;
    if (typeof value != "string") return array
    if (value.includes('px')) {
      return [key, `${parseFloat(value) * 0.75 / 4}pt`]
    }
    else if (value.includes('rem')) {
      return [key, `${parseFloat(value) * 12}pt`]
    }
    return array
  }))
}

const themeWithPts = Object.fromEntries(
  Object.entries(defaultConfig.theme).map(([key, value]) => {
    if (typeof value == "object")
      return [key, mapValuesToPt(value)]
    if (typeof value == "function")
      return [key, (config) => mapValuesToPt(value(config))]
    else
      throw new Error('Unexpected theme property value')
  })
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    ...themeWithPts,
    listStyleType: {
      sign: '"- "',
    },
    fontFamily: {
      body: ['Encode Sans', 'sans-serif'],
      heading: ['Jost', 'sans-serif'],
    },
  },
};
