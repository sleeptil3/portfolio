module.exports = {
	purge: {
		enabled: true,
		content: [
			'./src/*.js',
			'./src/**/*.js',
			'./public/index.html'
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'montserrat': ['"Montserrat"', 'sans-serif'],
		},
		fontWeight: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		extend: {
			colors: {
				'primary': '#FF00A8',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}