const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'first-banner': "url('/src/assets/images/banner1.png')",
        'footer-image': "url('/src/assets/images/cop.jpg')",
      },
      fontFamily: {
        poppins: ['poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
