module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        'primary': "#98619e"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),
],
}
