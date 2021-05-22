import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	const [fill, setFill] = useState(true)
	const [inFill, setInFill] = useState('#ffffff')

	const handleHover = () => {
		setFill(!fill)
	}

	const inHandleHover = () => {
		if (inFill === '#ffffff') setInFill('#FF00A8')
		else setInFill('#ffffff')
	}

	return (
		<header className="w-screen h-24 sm:h-auto py-4 flex items-center justify-center bg-black text-white tracking-wide">
			<div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width flex justify-between">
				<div className="absolute top-4 left-4 right-0 sm:static flex sm:flex-col md:flex-row space-x-0 md:space-x-12 lg:space-x-20 items-baseline">
					<Link to="/"><h1 className="font-semibold text-2xl tracking-wide">Shawn Clary</h1></Link>
					<div className="absolute top-9 bg-black sm:static flex mt-3 md:mt-0 space-x-8 md:space-x-16">
						<Link to="/"><p className="font-regular text-xs md:text-sm">My Work</p></Link>
						<Link to="/skills"><p className="font-regular text-xs md:text-sm">My Skills</p></Link>
						<Link to="/info"><p className="font-regular text-xs md:text-sm">My Info</p></Link>
					</div>
				</div>
				<div className="flex space-x-8 items-center">
					<a className="absolute right-4 sm:static top-4" href="https://www.linkedin.com/in/shclary/" target="_blank" rel="noopener noreferrer">
						<svg onMouseEnter={inHandleHover} onMouseLeave={inHandleHover} fill={inFill} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
					</a>
					<a className="absolute right-14 sm:static top-5" href="https://github.com/sleeptil3" target="_blank" rel="noopener noreferrer">
						<svg className="h-6 sm:h-auto" onMouseEnter={handleHover} onMouseLeave={handleHover} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
					<button className="absolute top-14 right-4 sm:static focus:outline-none focus:ring-0 bg-primary px-2 py-1 sm:px-3 sm:py-2 text-sm tracking-wide hover:bg-white hover:text-primary">Hire Me</button>
				</div>
			</div>
		</header>
	)
}
