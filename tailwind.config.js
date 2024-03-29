module.exports = {
  darkMode: 'class',
  theme: {
      screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1000px',
          '2xl': '1140px'
    },
    extend: {
    },
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ]
}
