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
  plugins: [],
}
