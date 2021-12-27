import { useLayoutEffect } from "react"
import Aos from "aos"

import blurbox1 from "../images/blurboxes/1.png"
import blurbox12x from "../images/blurboxes/1@2x.png"
import blurbox13x from "../images/blurboxes/1@3x.png"

import blurbox2 from "../images/blurboxes/2.png"
import blurbox22x from "../images/blurboxes/2@2x.png"
import blurbox23x from "../images/blurboxes/2@3x.png"
import { Link } from "react-router-dom"

export default function MyInfo() {
	useLayoutEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div className="flex justify-center items-start sm:items-center flex-grow max-w-full">
			<div className="absolute w-full h-full z-0 opacity-20 flex-grow flex justify-center space-x-20 items-center overflow-y-hidden">
				<img className="relative bottom-32 w-48 sm:w-72" data-aos-once="true" data-aos="fade-left" alt="" src={blurbox1} srcSet={`${blurbox12x} 2x, ${blurbox13x} 3x`} />
				<img className="relative top-32 w-32 sm:w-72" data-aos-once="true" data-aos="fade-right" alt="" src={blurbox2} srcSet={`${blurbox22x} 2x, ${blurbox23x} 3x`} />
			</div>
			<div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:px-10 py-10 px-5 h-full w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width">
				<div data-aos-once="true" data-aos="fade-down" className="mb-8 sm:mb-0">
					<h1 className="relative z-10 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">Info</h1>
					<h2 className="font-medium text-md sm:text-lg md:text-xl">About Me.</h2>
				</div>
				<div data-aos-once="true" data-aos="fade-up" className="flex flex-col sm:mr-10 relative px-4 sm:ml-20 sm:pl-20 z-10 font-medium text-lg sm:text-xl md:text-2xl">
					<div>
						<p className="font-semibold">Connect</p>
						<a href="https://www.linkedin.com/in/shclary/" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">
							LinkedIn
						</a>
						<Link to="/contact" className="block text-lg font-regular hover:text-primary">
							Contact Form
						</Link>
						<br />
					</div>
					<div>
						<p className="font-semibold">Downloads</p>
						<a href="https://drive.google.com/file/d/19AbbyXErH5prMjhG4SSe1UdabSUH36Jc/view" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">
							Resume
						</a>
						<a href="https://bit.ly/sc-statements" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">
							Recommendations
						</a>
						<a href="https://bit.ly/sclary-previs" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">
							Mockup & Design Examples
						</a>
						<a href="https://bit.ly/sclary-prReel" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">
							Video Production Reel
						</a>
						<br />
					</div>
					<div>
						<p className="font-semibold">Code</p>
						<a href="https://github.com/sleeptil3" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
