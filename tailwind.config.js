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
        lightGreen: '#B9E4C9',
        pumpkinOrange: '#FD5523',
      },
      fontFamily: {
        // headings
        serif: ['Lora'],
        // body
        'sans-serif': ['Roboto'],
      },
    },
  },
  plugins: [],
};
