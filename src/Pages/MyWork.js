import blurbox1 from '../images/blurboxes/1.png'
import blurbox2 from '../images/blurboxes/2.png'
import blurbox3 from '../images/blurboxes/3.png'
import blurbox4 from '../images/blurboxes/4.png'
import codelockr from '../images/screenshots/codelockr.png'
import nationalparks from '../images/screenshots/nationalparks.png'
import scribble from '../images/screenshots/scribble.png'
import weatherbyshawn from '../images/screenshots/weatherbyshawn.png'
import ProjectFeature from '../Components/ProjectFeature'
import { features } from '../Data/data'
import { v4 as uuid } from 'uuid'

export default function MyWork() {
	return (
		<div className="flex flex-col relative">
			<div className="h-screen mx-auto w-8/12 max-width px-20 flex items-center justify-between">
				<div className="relative z-10 flex flex-col items-start space-y-20 w-7/12 flex-shrink-0 overflow-x-visible">
					<h1 className="font-medium text-8xl tracking-tight whitespace-nowrap ">Wizard of<br />Web & Code</h1>
					<h2 className="font-medium text-4xl whitespace-nowrap">Software, creatively done.</h2>
					<div className="flex justify-center items-center w-full">
						<svg className="-ml-28 animate-bounce" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M30 50V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12.5 32.5L30 50L47.5 32.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				</div>
				{/* BLUR BOX */}
				<div className="relative z-0 flex-grow-0 opacity-80">
					{/* Animation Idea: on scroll have top increment right slide (translate-x) and bottom increment left slide (-translate-x) */}
					<img className="relative left-10 filter blur-2xl" src={blurbox1} alt="" />
					<img className="relative bottom-32 right-20 filter blur-xl" src={blurbox2} alt="" />
				</div>
				{/* END BLUR BOX */}
			</div>
			{/* FEATURED PROJECT */}
			<div className="mx-auto w-8/12 max-width mb-32">
				<div className="">
					<h3 className="font-semibold text-primary text-sm text-center">FEATURED PROJECT</h3>
					<h2 className="font-bold text-4xl text-center p-2">CodeLockr</h2>
				</div>
				<div className="mt-10 relative flex justify-between items-center">
					<div className="relative z-10 flex flex-col space-y-6 w-1/2 pr-32">
						<p className="text-2xl font-regular leading-relaxed">
							<span className="font-semibold">CodeLockr</span> enables web developers and software engineers to have easy access to their coding 'Snippets', neatly organized into folders, and looking fantastic.
						</p>
						<p className="text-gray-400 text-sm font-bold tracking-wide">#FullStack #MongoDB #Express #React #NodeJS</p>
						<div className="flex space-x-2">
							<a href="https://www.codelockr.com/" target="_blank" rel="noopener noreferrer">VISIT</a>
							<p className="text-gray-400 font-bold text-sm">|</p>
							<a href="https://github.com/sleeptil3/codelockr-react" target="_blank" rel="noopener noreferrer">CODE</a>
						</div>
					</div>
					<div className="absolute -left-40 z-0">
						<img className="relative left-48 filter blur-xl" src={blurbox4} alt="" />
						<img className="relative bottom-10 left-7 filter blur-lg" src={blurbox3} alt="" />
					</div>
					<div className="w-1/2">
						<img src={codelockr} alt="" />
					</div>
				</div>
			</div>
			{/* END FEATURED PROJECT */}
			{/* BEGIN MAPPED PROJECTS */}
			{features.map(feature => {
				return (
					<div key={uuid()} className="bg-black mb-64">
						<ProjectFeature image={feature.image} category={feature.category} title={feature.title} description={feature.description} hashtags={feature.hashtags} visit={feature.visit} code={feature.code} reverse={feature.reverse} />
					</div>
				)
			})}
			{/* END MAPPED PROJECTS */}
			{/* BEGIN MINI PROJECT */}
			<div className="flex justify-between mx-auto w-8/12 max-width mb-64">
				<div className="flex flex-col justify-between items-center w-1/4 space-y-10">
					<div>
						<h3 className="font-semibold text-primary text-xs text-center">WEBSITE</h3>
						<h2 className="font-bold text-2xl text-center p-1">ParkBrowser</h2>
					</div>
					<div className="space-y-5 w-5/6">
						<p className="text-md font-regular leading-relaxed">A National Park finder pulling data from the National Parks API.</p>
						<p className="text-gray-400 text-xs font-bold tracking-wide">#React #CSS #APIDataIntegration</p>
						<div className="flex space-x-2 items-center">
							<a href="https://suspicious-cray-30c99b.netlify.app" target="_blank" rel="noopener noreferrer">VISIT</a>
							<p className="text-gray-400 font-bold text-xs">|</p>
							<a href="https://git.generalassemb.ly/sclary110/hw-W05D05-react-router-national-parks/tree/main" target="_blank" rel="noopener noreferrer">CODE</a>
						</div>
					</div>
					<div className="relative bottom-4">
						<img className="transform scale-105" src={nationalparks} alt="" />
					</div>
				</div>
				<div className="flex flex-col justify-between items-center w-1/4 space-y-10">
					<div>
						<h3 className="font-semibold text-primary text-xs text-center">WEB APP</h3>
						<h2 className="font-bold text-2xl text-center p-1">Weather By Shawn</h2>
					</div>
					<div className="space-y-5 w-5/6">
						<p className="text-md font-regular leading-relaxed">Local weather information with a ‘deconstructed’ aesthetic.</p>
						<p className="text-gray-400 text-xs font-bold tracking-wide">#HTML #CSS #APIDataIntegration</p>
						<div className="flex space-x-2 items-center">
							<a href="https://pages.git.generalassemb.ly/sclary110/hw-w03d04-open-weather-map/" target="_blank" rel="noopener noreferrer">VISIT</a>
							<p className="text-gray-400 font-bold text-xs">|</p>
							<a href="https://git.generalassemb.ly/sclary110/hw-w03d04-open-weather-map/tree/master/docs" target="_blank" rel="noopener noreferrer">CODE</a>
						</div>
					</div>
					<div className="relative bottom-4">
						<img className="transform scale-105" src={weatherbyshawn} alt="" />
					</div>
				</div>
				<div className="flex flex-col justify-between items-center w-1/4 space-y-10">
					<div>
						<h3 className="font-semibold text-primary text-xs text-center">BLOG</h3>
						<h2 className="font-bold text-2xl text-center p-1">Scribble</h2>
					</div>
					<div className="space-y-5 w-5/6">
						<p className="text-md font-regular leading-relaxed">A blog and comment system written entirely in Django using templates.</p>
						<p className="text-gray-400 text-xs font-bold tracking-wide">#Django #HTML #CSS</p>
						<div className="flex space-x-2 items-center">
							<a href="https://git.generalassemb.ly/sclary110/hw-w07d05-scribble/tree/dev" target="_blank" rel="noopener noreferrer">CODE</a>
						</div>
					</div>
					<div className="relative bottom-4">
						<img className="transform scale-105" src={scribble} alt="" />
					</div>
				</div>
			</div>
			{/* END MINI PROJECTS */}
		</div>
	)
}