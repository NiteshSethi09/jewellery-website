const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        auto: 'auto',
      },
      backgroundImage: {
        'first-banner': "url('/src/assets/images/banner1.png')",
      },
      fontFamily: {
        poppins: ['poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
