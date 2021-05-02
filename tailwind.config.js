module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yl: "#ffc107",
        offWhite: "#C4C4C4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
