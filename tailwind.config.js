module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        nav: '#ededed',
        title: '#777777',
        text: '#444444',
        link: '#0011bb',
        'link-visited': '#6600cc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
