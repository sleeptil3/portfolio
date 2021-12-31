import { useEffect, useState } from "react"
import mercuryMarathon from "../images/screenshots/mercurymarathon.png"
import mercuryMarathon2x from "../images/screenshots/mercurymarathon@2x.png"
import mercuryMarathon3x from "../images/screenshots/mercurymarathon@3x.png"

import justGiveMeSpace from "../images/screenshots/justgivemespace.png"
import justGiveMeSpace2x from "../images/screenshots/justgivemespace@2x.png"
import justGiveMeSpace3x from "../images/screenshots/justgivemespace@3x.png"

import mirror from "../images/screenshots/mirror.png"
import mirror2x from "../images/screenshots/mirror@2x.png"
import mirror3x from "../images/screenshots/mirror@3x.png"

import codelockr from "../images/screenshots/codelockr.png"
import codelockr2x from "../images/screenshots/codelockr@2x.png"
import codelockr3x from "../images/screenshots/codelockr@3x.png"

export default function ProjectFeature({ category, title, description, hashtags, visit, frontCode, backCode, reverse, image }) {
	const [img, setImg] = useState()

	useEffect(() => {
		switch (image) {
			case "mercuryMarathon": {
				setImg(<img className="-my-10" src={mercuryMarathon} srcSet={`${mercuryMarathon2x} 2x, ${mercuryMarathon3x} 3x`} alt="" />)
				break
			}
			case "justGiveMeSpace": {
				setImg(<img className="-my-10" src={justGiveMeSpace} srcSet={`${justGiveMeSpace2x} 2x, ${justGiveMeSpace3x} 3x`} alt="" />)
				break
			}
			case "mirror": {
				setImg(<img src={mirror} srcSet={`${mirror2x} 2x, ${mirror3x} 3x`} alt="" />)
				break
			}
			case "codelockr": {
				setImg(<img src={codelockr} srcSet={`${codelockr2x} 2x, ${codelockr3x} 3x`} alt="" />)
				break
			}
			default:
				console.error("image not found in screenshots")
		}
	}, [image])

	return (
		<div className="py-6 mx-auto sm:py-10 md:py-20 xl:py-20 md:-my-20 px-2 lg:px-0 w-12/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 text-white ">
			<div className={`relative flex flex-col-reverse sm:flex-row sm:space-x-10 justify-around xl:justify-between items-center ${reverse ? "sm:flex-row-reverse" : null}`}>
				<div className="relative bottom-10 z-10 order-1 mt-10 sm:mt-0 sm:w-6/12 sm:-my-20" data-aos-once="true" data-aos-offset="100" data-aos={!reverse ? "fade-left" : "fade-right"}>
					{img}
				</div>
				<div className="relative z-10 px-2 flex flex-col space-y-10 md:space-y-4 lg:space-y-5 2xl:space-y-6 sm:w-5/12" data-aos-once="true" data-aos-offset="100" data-aos={reverse ? "fade-left" : "fade-right"}>
					<div className="text-center sm:text-left">
						<h3 className="font-semibold text-primary text-xs 2xl:text-sm">{category}</h3>
						<h2 className="font-bold text-2xl sm:text-lg lg:text-2xl 2xl:text-3xl lg:pt-2">{title}</h2>
					</div>
					<p className="text-md md:text-xs xl:text-sm 2xl:text-base lg:font-regular tracking-wide">{description}</p>
					<p className="relative bottom-4 sm:bottom-0 text-gray-400 text-xs 2xl:text-sm font-bold tracking-wide">{hashtags}</p>
					<div className="flex space-x-2 text-xs justify-center sm:justify-start">
						<a className="text-xs" href={visit} target="_blank" rel="noopener noreferrer">
							VISIT
						</a>
						<p className="text-gray-400 font-bold px-2">|</p>
						<p className="text-white font-regular pr-2">VIEW CODE:</p>
						<a className="font-bold cursor-pointer text-xs" href={frontCode} target="_blank" rel="noopener noreferrer">
							Front
						</a>
						{backCode !== "" && <p className="text-gray-400 font-regular px-1">•</p>}
						{backCode !== "" && (
							<a className="font-bold cursor-pointer text-xs" href={backCode} target="_blank" rel="noopener noreferrer">
								Back
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
