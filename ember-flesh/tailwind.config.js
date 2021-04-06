const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        rose: colors.rose,
      },
      spacing: {
        image: '42%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      borderWidth: ['first'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
