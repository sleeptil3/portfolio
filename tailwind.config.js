const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: {
		enabled: true,
		content: [
			'./src/*.js',
			'./src/Components/*.js',
			'./src/Pages/*.js',
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
	plugins: [
		plugin(function ({ addComponents, theme }) {
			const screens = theme('screens', {})
			const mediaQueries = _.map(screens, (width, breakpoint) => {
				return {
					[`@media (min-width: ${width})`]: {
						'.breakpoint-display::after': {
							content: `'${breakpoint}'`,
						},
					},
				}
			})

			addComponents([
				{
					'.breakpoint-display': {
						color: 'white',
						position: 'fixed',
						backgroundColor: 'black',
						textTransform: 'uppercase',
						borderRadius: theme('borderRadius.xl'),
						padding: theme('spacing.2'),
						'&::after': {
							content: `'default'`,
						},
					},
				},
				...mediaQueries,
			])
		}),
	],
}