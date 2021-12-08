module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or media
  theme: {
    colors: {
      'black': {
        lightest: '#F1F1F1',
        lighter: '#6F7173',
        dark: '#303030',
        darker: '#000000',
      },
      white: '#ffffff',
      primary: 'rgb(212,32,39)',
      transparent: '#ffffff00',
    },
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-scroll-snap'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
