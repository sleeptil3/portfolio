import { useState } from 'react'

export default function Header() {
	const [fill, setFill] = useState(true)

	const handleHover = () => {
		setFill(!fill)
	}
	return (
		<header className="w-screen py-4 flex items-center justify-center bg-black text-white tracking-wide">
			<div className="w-8/12 max-width flex justify-between">
				<div className="flex space-x-20 items-baseline">
					<h1 className="font-semibold text-2xl tracking-wide">Shawn Clary</h1>
					<div className="flex space-x-16">
						<a href="#"><p className="font-regular text-sm">My Work</p></a>
						<a href="#"><p className="font-regular text-sm">My Skills</p></a>
						<a href="#"><p className="font-regular text-sm">My Info</p></a>
					</div>
				</div>
				<div className="flex space-x-12 items-center">
					<a href="https://github.com/sleeptil3" target="_blank" rel="noopener noreferrer">
						<svg onMouseEnter={handleHover} onMouseLeave={handleHover} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0)">
								<path fillRule="evenodd" clipRule="evenodd" d="M16.29 0C7.29 0 0 7.29 0 16.29C0 23.49 4.67 29.59 11.14 31.75C11.95 31.9 12.25 31.4 12.25 30.96C12.25 30.57 12.24 29.55 12.23 28.19C7.7 29.17 6.74 26.01 6.74 26.01C6 24.13 4.93 23.62 4.93 23.62C3.45 22.61 5.04 22.63 5.04 22.63C6.67 22.75 7.54 24.31 7.54 24.31C8.99 26.8 11.35 26.08 12.28 25.66C12.43 24.61 12.85 23.89 13.31 23.48C9.7 23.08 5.9 21.68 5.9 15.44C5.9 13.66 6.53 12.21 7.58 11.07C7.41 10.65 6.85 9 7.73 6.76C7.73 6.76 9.1 6.32 12.21 8.43C13.51 8.07 14.9 7.89 16.29 7.88C17.67 7.89 19.07 8.07 20.37 8.43C23.48 6.32 24.85 6.76 24.85 6.76C25.74 9 25.18 10.66 25.01 11.07C26.05 12.21 26.68 13.66 26.68 15.44C26.68 21.7 22.87 23.07 19.24 23.48C19.82 23.98 20.35 24.98 20.35 26.5C20.35 28.68 20.33 30.43 20.33 30.97C20.33 31.41 20.62 31.91 21.45 31.75C27.92 29.59 32.58 23.49 32.58 16.3C32.58 7.29 25.29 0 16.29 0Z" fill={!fill ? '#FF00A8' : 'white'} />
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="32.58" height="31.77" fill="bg-primary" />
								</clipPath>
							</defs>
						</svg>
					</a>
					<button className="focus:outline-none focus:ring-0 bg-primary px-3 py-2 text-sm tracking-wide hover:bg-white hover:text-primary">Hire Me</button>
				</div>
			</div>
		</header>
	)
}
