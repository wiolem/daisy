const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      blue: colors.lightBlue,
      green: colors.emerald,
      red: colors.red,
      rose: colors.rose,
      yellow: colors.amber,
      gray: colors.coolGray
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: colors.green,
        code: colors.purple
      },
      maxWidth: {
        '8xl': '90rem'
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              maxWidth: 'none',
              color: theme('colors.gray.500'),
              '> :first-child': { marginTop: '-' },
              '> :last-child': { marginBottom: '-' },
              '&:first-child > :first-child': {
                marginTop: '0'
              },
              '&:last-child > :last-child': {
                marginBottom: '0'
              },
              'h1, h2': {
                letterSpacing: '-0.025em'
              },
              'h2, h3': {
                'scroll-margin-block': `${(70 + 40) / 16}rem`
              },
              'h2 code': {
                color: 'inherit',
                fontWeight: 'inherit'
              },
              'h3 code': {
                color: 'inherit',
                fontWeight: 'inherit'
              },
              a: {
                color: theme('colors.primary.500'),
                fontWeight: theme('fontWeight.medium'),
                textDecoration: 'none'
              },
              'a:hover': {
                borderBottomWidth: 2,
                borderBottomColor: theme('colors.primary.500'),
                paddingBottom: '1px'
              },
              'a code': {
                color: 'inherit',
                fontWeight: theme('fontWeight.medium')
              },
              strong: {
                color: theme('colors.gray.900'),
                fontWeight: theme('fontWeight.medium')
              },
              'a strong': {
                color: 'inherit',
                fontWeight: 'inherit'
              },
              code: {
                fontWeight: '400',
                color: theme('colors.code.500')
              },
              pre: {
                backgroundColor: theme('colors.gray.800'),
                color: theme('colors.white'),
                borderRadius: theme('borderRadius.md'),
                marginTop: 0,
                marginBottom: 0
              },
              table: {
                fontSize: theme('fontSize.sm')[0],
                lineHeight: theme('fontSize.sm')[1].lineHeight
              },
              thead: {
                color: theme('colors.gray.600'),
                borderBottomColor: theme('colors.gray.200')
              },
              'thead th': {
                paddingTop: 0,
                fontWeight: theme('fontWeight.semibold')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.200')
              },
              'tbody tr:last-child': {
                borderBottomWidth: '1px'
              },
              'tbody code': {
                fontSize: theme('fontSize.xs')[0]
              }
            }
          },
          dark: {
            css: {
              color: theme('colors.gray.300'),
              strong: {
                color: theme('colors.gray.100')
              },
              a: {
                color: theme('colors.primary.400')
              },
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600')
              },
              hr: {
                borderColor: theme('colors.gray.700')
              },
              blockquote: {
                color: theme('colors.gray.400'),
                borderLeftColor: theme('colors.gray.700')
              },
              h1: {
                color: theme('colors.gray.100')
              },
              h2: {
                color: theme('colors.gray.100')
              },
              h3: {
                color: theme('colors.gray.100')
              },
              h4: {
                color: theme('colors.gray.100')
              },
              'h2 code': {
                color: 'inherit',
                fontWeight: 'inherit'
              },
              'h3 code': {
                color: 'inherit',
                fontWeight: 'inherit'
              },
              'figure figcaption': {
                color: theme('colors.gray.400')
              },
              code: {
                color: theme('colors.code.400')
              },
              'pre code': {
                color: theme('colors.gray.100')
              },
              'a code': {
                color: 'inherit',
                fontWeight: theme('fontWeight.medium')
              },
              thead: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.600')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-css-variables')({
      colors: 'color',
      screens: false,
      fontFamily: false,
      fontSize: false,
      fontWeight: false,
      lineHeight: false,
      letterSpacing: false,
      backgroundSize: false,
      borderWidth: false,
      borderRadius: false,
      width: false,
      height: false,
      minWidth: false,
      minHeight: false,
      maxWidth: false,
      maxHeight: false,
      padding: false,
      margin: false,
      boxShadow: false,
      zIndex: false,
      opacity: false
    })
  ]
}
