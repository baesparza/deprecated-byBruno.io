module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white-resume': '#F7FBFE',
        'black': {
          lighter: '#6F7173',
          darker: '#000000',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
