const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          600: '#FF0000',
        },
        green: {
          600: '#00FF00', 
        },
        blue: {
          600: '#00FFFF', 
        },
        pink: {
          600: '#FF00FF', 
        },
        yellow:{
          600: '#FFFF00', 
        },
        gray: {
          600: '#D9D9D9'
        },
        custom: {
          background: "var(--background)"
        }
      },
      height:{
        screenNav: "calc(100vh - 5rem)",
      },
      width:{
        176: "176px"
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto'],
        verdana: ['Verdana']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}
