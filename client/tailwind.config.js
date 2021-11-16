module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black': {
        lighter: '#6F7173',
        darker: '#000000',
      },
      white: '#ffffff',
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
  ],
}
