const BLOG = require('./blog.config')
const fontFamilies = require('./lib/font')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        },
        labs: {
          'black': '#010101',
        },
        'sophon': '#00A7B4'
      },
      screens: {
        '4xl': '55rem'
      },
      maxWidth: {
        '8xl': '79rem',
      },
      lineHeight: {
        'sophon-size': '30px' 
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}
