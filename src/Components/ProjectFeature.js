import { useEffect, useState } from 'react'
import mercuryMarathon from '../images/screenshots/mercurymarathon.png'
import justGiveMeSpace from '../images/screenshots/justgivemespace.png'
import mirror from '../images/screenshots/mirror.png'

export default function ProjectFeature({ category, title, description, hashtags, visit, code, reverse, image }) {
	const [img, setImg] = useState()

	useEffect(() => {
		if (image === 'mercuryMarathon') {
			console.log('mercu')
			setImg(<img src={mercuryMarathon} alt="" />)
		}
		if (image === 'justGiveMeSpace') {
			setImg(<img src={justGiveMeSpace} alt="" />)
		}
		if (image === 'mirror') {
			setImg(<img src={mirror} alt="" />)
		}
	}, [image])

	return (
		<div className="py-14 sm:py-10 mx-auto md:-my-20 w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width text-white">
			<div className={`relative flex flex-col sm:flex-row justify-around xl:justify-between items-center ${reverse ? 'sm:flex-row-reverse' : null}`}>
				<div className="relative z-10 top-2 order-1 mt-10 sm:mt-0 sm:w-5/12">
					{img}
				</div>
				<div className="relative z-10 flex flex-col space-y-5 xl:space-y-10 sm:w-5/12">
					<div className="">
						<h3 className="font-semibold text-primary text-sm">{category}</h3>
						<h2 className="font-bold text-2xl xl:text-4xl pt-2">{title}</h2>
					</div>
					<p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl font-regular leading-relaxed">{description}</p>
					<p className="text-gray-400 text-sm font-bold tracking-wide">{hashtags}</p>
					<div className="flex space-x-2">
						<a href={visit} target="_blank" rel="noopener noreferrer">VISIT</a>
						<p className="text-gray-400 font-bold text-sm">|</p>
						<a href={code} target="_blank" rel="noopener noreferrer">CODE</a>
					</div>
				</div>
			</div>
		</div>
	)
}
