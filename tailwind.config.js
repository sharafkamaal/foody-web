module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // ADD THIS LINE
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ea1228',
        secondary: '#0a1522',
        accent: '#c11123',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}