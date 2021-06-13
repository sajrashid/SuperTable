module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
			translate: {
				200: '200%',
			},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
