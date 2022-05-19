module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBeige: '#F8F2CB',
        lightBeige: '#FFFBE6',
        mossGreen: '#356859',
        darkGreen: '#37966F',
        heavyGreen: '#2F4858',
        lightGreen: '#B9E4C9',
        pumpkinOrange: '#FD5523',
      },
      fontFamily: {
        // headings
        // medium-500. semi-bold-600, bold-700
        serif: ['Lora'],
        // body
        // medium-500, bold-700, black-900
        'sans-serif': ['Roboto'],
      },
    },
  },
  plugins: [],
};
