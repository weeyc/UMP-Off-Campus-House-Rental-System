const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',


		coolGray: colors.coolGray,

        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        ump: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          green: '#15a195',
        },


      },

    extend: {

        backgroundImage: {

           // 'pekan': "url('/images/UMP/wide.jpg')",


           },

           fontFamily: {
               'poppins': 'Poppins',
               'montserrat': 'Montserrat',
               'oswald': 'Oswald',
               'roboto': 'Roboto',

           }
    },
  },
  variants: {},
  plugins: [],
}


