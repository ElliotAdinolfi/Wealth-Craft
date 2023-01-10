/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
