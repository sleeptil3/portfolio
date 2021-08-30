import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'

export default function Header() {

	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<header
			data-aos-once="true"
			data-aos="slide-down"
			className="relative z-10 w-screen sm:h-auto py-2 sm:py-8 px-2 flex items-center justify-center bg-black text-white tracking-wide">
			<div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width flex justify-between items-center">
				<div className="flex flex-col justify-start items-baseline md:flex-row md:space-x-12 lg:space-x-20 flex-wrap">
					<Link to="/">
						<h1 className="font-semibold text-2xl tracking-wide">Shawn Clary</h1>
					</Link>
					<div className="bg-black sm:static flex mt-3 md:mt-0 space-x-8 md:space-x-16">
						<Link to="/">
							<p className="font-regular text-xs md:text-sm">My Work</p>
						</Link>
						<Link to="/skills">
							<p className="font-regular text-xs md:text-sm">My Skills</p>
						</Link>
						<Link to="/info">
							<p className="font-regular text-xs md:text-sm">My Info</p>
						</Link>
					</div>
				</div>
				<div className="sm:space-x-4 sm:flex-grow flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-end">
					<a className="pb-2 sm:pb-0" href="https://www.linkedin.com/in/shclary/" target="_blank" rel="noopener noreferrer">
						<svg className="w-7 sm:w-auto text-white fill-current hover:text-primary transform transition-colors duration-200" width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
							<path d="M26.125 0H6.875C3.07863 0 0 3.07863 0 6.875V26.125C0 29.9214 3.07863 33 6.875 33H26.125C29.9227 33 33 29.9214 33 26.125V6.875C33 3.07863 29.9227 0 26.125 0ZM11 26.125H6.875V11H11V26.125ZM8.9375 9.2565C7.60925 9.2565 6.53125 8.17025 6.53125 6.831C6.53125 5.49175 7.60925 4.4055 8.9375 4.4055C10.2658 4.4055 11.3438 5.49175 11.3438 6.831C11.3438 8.17025 10.2671 9.2565 8.9375 9.2565ZM27.5 26.125H23.375V18.4195C23.375 13.7885 17.875 14.1391 17.875 18.4195V26.125H13.75V11H17.875V13.4269C19.7945 9.87113 27.5 9.6085 27.5 16.8314V26.125Z" />
						</svg>
					</a>
					<a name="pt-2 sm:pt-0 flex-grow" href="https://github.com/sleeptil3" target="_blank" rel="noopener noreferrer">
						<svg
							className="w-7 sm:w-auto text-white fill-current hover:text-primary transform sm:transform-none transition-colors duration-200"
							width="33"
							height="33"
							viewBox="0 0 33 33"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7 0C3.13401 0 0 3.13401 0 7V26C0 29.866 3.13401 33 7 33H26C29.866 33 33 29.866 33 26V7C33 3.13401 29.866 0 26 0H7ZM3 16.8396C3 9.19342 9.04144 3 16.5 3C23.9586 3 30 9.19342 30 16.8481C30 22.9566 26.1381 28.139 20.7762 29.9741C20.0884 30.11 19.8481 29.6852 19.8481 29.3114C19.8481 29.1589 19.8499 28.893 19.8523 28.5378C19.8573 27.8242 19.8646 26.7504 19.8646 25.5138C19.8646 24.2224 19.4254 23.3729 18.9447 22.9481C21.953 22.5997 25.1105 21.4358 25.1105 16.1175C25.1105 14.6052 24.5884 13.3733 23.7265 12.4048C23.8674 12.0565 24.3315 10.6462 23.5939 8.74314C23.5939 8.74314 22.4586 8.36933 19.8812 10.1619C18.8039 9.85609 17.6436 9.70316 16.5 9.69467C15.3481 9.70316 14.1961 9.85609 13.1188 10.1619C10.5414 8.36933 9.40608 8.74314 9.40608 8.74314C8.6768 10.6462 9.14088 12.048 9.28177 12.4048C8.4116 13.3733 7.8895 14.6052 7.8895 16.1175C7.8895 21.4188 11.0387 22.6082 14.0304 22.9481C13.6492 23.2964 13.3011 23.9081 13.1768 24.8001C12.4061 25.157 10.4503 25.7687 9.24862 23.6532C9.24862 23.6532 8.52762 22.3279 7.1768 22.2259C7.1768 22.2259 5.85912 22.2089 7.08563 23.067C7.08563 23.067 7.97237 23.5003 8.58563 25.0975C8.58563 25.0975 9.38121 27.7822 13.1354 26.9496C13.1383 27.3639 13.1413 27.7412 13.1439 28.0699C13.1485 28.6577 13.1519 29.0904 13.1519 29.3029C13.1519 29.6767 12.9033 30.1015 12.232 29.9741C6.87017 28.139 3 22.9566 3 16.8396Z"
							/>
						</svg>
					</a>
					<Link
						to="/contact"
						className="absolute top-24 right-2 sm:static flex justify-center items-center bg-gradient-to-r from-pink-600 to-purple-700 hover:bg-white focus:outline-none focus:ring-0 px-2 sm:px-3 py-1 lg:px-3 sm:py-2 text-xs md:text-md tracking-normal font-regular"
					>
						Contact
					</Link>
				</div>
			</div>
		</header>
	);
}