import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'

export default function Header() {

	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<header data-aos="slide-down" className="relative z-10 w-screen h-24 sm:h-auto py-4 flex  items-center justify-center bg-black text-white tracking-wide">
			<div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width flex justify-between">
				<div className="absolute top-4 left-4 right-0 sm:static flex sm:flex-col md:flex-row space-x-0 md:space-x-12 lg:space-x-20 items-baseline">
					<Link to="/"><h1 className="font-semibold text-2xl tracking-wide">Shawn Clary</h1></Link>
					<div className="absolute top-9 bg-black sm:static flex mt-3 md:mt-0 space-x-8 md:space-x-16">
						<Link to="/"><p className="font-regular text-xs md:text-sm">My Work</p></Link>
						<Link to="/skills"><p className="font-regular text-xs md:text-sm">My Skills</p></Link>
						<Link to="/info"><p className="font-regular text-xs md:text-sm">My Info</p></Link>
					</div>
				</div>
				<div className="space-x-4 items-center justify-center hidden sm:flex">
					<a className="absolute right-4 sm:static top-4" href="https://www.linkedin.com/in/shclary/" target="_blank" rel="noopener noreferrer">
						<svg className="text-white fill-current hover:text-primary transform scale-90 sm:transform-none transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
					</a>
					<a className="absolute right-14 sm:static top-5 transform translate-x-1 sm:translate-none" href="https://github.com/sleeptil3" target="_blank" rel="noopener noreferrer">
						<svg className="text-white fill-current hover:text-primary transform scale-90 sm:transform-none transition-colors duration-200" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13401 0 0 3.13401 0 7V26C0 29.866 3.13401 33 7 33H26C29.866 33 33 29.866 33 26V7C33 3.13401 29.866 0 26 0H7ZM3 16.8396C3 9.19342 9.04144 3 16.5 3C23.9586 3 30 9.19342 30 16.8481C30 22.9566 26.1381 28.139 20.7762 29.9741C20.0884 30.11 19.8481 29.6852 19.8481 29.3114C19.8481 29.1589 19.8499 28.893 19.8523 28.5378C19.8573 27.8242 19.8646 26.7504 19.8646 25.5138C19.8646 24.2224 19.4254 23.3729 18.9447 22.9481C21.953 22.5997 25.1105 21.4358 25.1105 16.1175C25.1105 14.6052 24.5884 13.3733 23.7265 12.4048C23.8674 12.0565 24.3315 10.6462 23.5939 8.74314C23.5939 8.74314 22.4586 8.36933 19.8812 10.1619C18.8039 9.85609 17.6436 9.70316 16.5 9.69467C15.3481 9.70316 14.1961 9.85609 13.1188 10.1619C10.5414 8.36933 9.40608 8.74314 9.40608 8.74314C8.6768 10.6462 9.14088 12.048 9.28177 12.4048C8.4116 13.3733 7.8895 14.6052 7.8895 16.1175C7.8895 21.4188 11.0387 22.6082 14.0304 22.9481C13.6492 23.2964 13.3011 23.9081 13.1768 24.8001C12.4061 25.157 10.4503 25.7687 9.24862 23.6532C9.24862 23.6532 8.52762 22.3279 7.1768 22.2259C7.1768 22.2259 5.85912 22.2089 7.08563 23.067C7.08563 23.067 7.97237 23.5003 8.58563 25.0975C8.58563 25.0975 9.38121 27.7822 13.1354 26.9496C13.1383 27.3639 13.1413 27.7412 13.1439 28.0699C13.1485 28.6577 13.1519 29.0904 13.1519 29.3029C13.1519 29.6767 12.9033 30.1015 12.232 29.9741C6.87017 28.139 3 22.9566 3 16.8396Z" />
						</svg>

					</a>
					<Link to="/info" className="absolute transform translate-x-2 rounded-md top-14 sm:static focus:outline-none focus:ring-0 bg-primary px-2 py-1 sm:px-3 sm:py-2 text-xs md:text-md tracking-wide hover:bg-white">Hire Me</Link>
				</div>
			</div>
		</header>
	)
}
