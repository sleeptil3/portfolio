import { useEffect, useState } from 'react'
import Aos from 'aos'
import mercuryMarathon from '../images/screenshots/mercurymarathon.png'
import justGiveMeSpace from '../images/screenshots/justgivemespace.png'
import mirror from '../images/screenshots/mirror.png'
import euchre from '../images/screenshots/euchre.png'
import codelockr from '../images/screenshots/codelockr.png'

export default function ProjectFeature({ category, title, description, hashtags, visit, frontCode, backCode, reverse, image }) {
	const [img, setImg] = useState()

	useEffect(() => {
		switch (image) {
			case 'mercuryMarathon': { setImg(<img src={mercuryMarathon} alt="" />); break; }
			case 'justGiveMeSpace': { setImg(<img src={justGiveMeSpace} alt="" />); break; }
			case 'mirror': { setImg(<img src={mirror} alt="" />); break; }
			case 'codelockr': { setImg(<img src={codelockr} alt="" />); break; }
			default: console.error("image not found in screenshots")
		}
	}, [image])

	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div className="py-14 sm:py-10 mx-auto md:-my-20 w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width text-white">
			<div className={`relative flex flex-col sm:flex-row justify-around xl:justify-between items-center ${reverse ? 'sm:flex-row-reverse' : null}`}>
				<div data-aos-offset="100" data-aos={!reverse ? "fade-left" : "fade-right"} className="relative z-10 top-2 order-1 mt-10 sm:mt-0 sm:w-5/12">
					{img}
				</div>
				<div data-aos-offset="300" data-aos={reverse ? "fade-left" : "fade-right"} className="relative z-10 flex flex-col space-y-5 xl:space-y-10 sm:w-5/12">
					<div className="">
						<h3 className="font-semibold text-primary text-sm">{category}</h3>
						<h2 className="font-bold text-2xl xl:text-4xl pt-2">{title}</h2>
					</div>
					<p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl font-regular leading-relaxed">{description}</p>
					<p className="text-gray-400 text-sm font-bold tracking-wide">{hashtags}</p>
					<div className="flex space-x-2">
						<a href={visit} target="_blank" rel="noopener noreferrer">VISIT</a>
						<p className="text-gray-400 font-bold text-sm px-2">|</p>
						<p className="text-white font-bold text-sm pr-2">VIEW CODE:</p>
						<a className="font-regular cursor-pointer" href={frontCode} target="_blank" rel="noopener noreferrer">Front</a>
						{backCode !== "" && <p className="text-gray-400 font-bold text-sm px-1">•</p>}
						{backCode !== "" && <a className="font-regular cursor-pointer" href={backCode} target="_blank" rel="noopener noreferrer">Back</a>}
					</div>
				</div>
			</div>
		</div>
	)
}
