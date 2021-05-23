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
			},
			animation: {
				'fade-from-right': 'fade-right 2s forwards',
				'fade-from-left': 'fade-left 2s forwards',
				'fade-from-bottom': 'fade-bottom 2s forwards',
				'fade': 'fade-in 1s 2s forwards',
			},
			keyframes: {
				'fade-right': {
					'0%': { opacity: 0, transform: 'translateX(100px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' }
				},
				'fade-left': {
					'0%': { opacity: 0, transform: 'translateX(-100px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' }
				},
				'fade-bottom': {
					'0%': { opacity: 0, transform: 'translateY(100px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
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