import { useEffect, useState } from 'react'
import mercuryMarathon from '../images/screenshots/mercurymarathon.png'
import justGiveMeSpace from '../images/screenshots/justgivemespace.png'
import mirror from '../images/screenshots/mirror.png'
import blurbox5 from '../images/blurboxes/5.png'
import blurbox6 from '../images/blurboxes/6.png'

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
		<div className="mx-auto -my-20 w-8/12 max-width text-white">
			<div className={`relative flex justify-between items-center ${reverse ? 'flex-row-reverse' : null}`}>
				<div className="relative z-10 top-2 w-5/12">
					{img}
				</div>
				<div className="relative z-10 flex flex-col space-y-10 w-5/12">
					<div className="">
						<h3 className="font-semibold text-primary text-sm">{category}</h3>
						<h2 className="font-bold text-4xl pt-2">{title}</h2>
					</div>
					<p className="text-2xl font-regular leading-relaxed">{description}</p>
					<p className="text-gray-400 text-sm font-bold tracking-wide">{hashtags}</p>
					<div className="flex space-x-2">
						<a href={visit} target="_blank" rel="noopener noreferrer">VISIT</a>
						<p className="text-gray-400 font-bold text-sm">|</p>
						<a href={code} target="_blank" rel="noopener noreferrer">CODE</a>
					</div>
				</div>
				{reverse ?
					<div className="absolute -left-40 z-0 opacity-30 transform rotate-180 scale-90">
						<img className="absolute -left-60 -top-14 filter blur-2xl" src={blurbox5} alt="" />
						<img className="relative top-10 filter blur-2xl" src={blurbox6} alt="" />
					</div>
					:
					<div className="absolute right-0 z-0 opacity-30 transform scale-90">
						<img className="absolute -right-72 -top-14 filter blur-2xl" src={blurbox5} alt="" />
						<img className="relative top-10 filter blur-2xl" src={blurbox6} alt="" />
					</div>
				}
			</div>
		</div>
	)
}
