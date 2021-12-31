import { Link as ScrollLink } from "react-scroll"
import ProjectFeature from "../Components/ProjectFeature"
import { features } from "../Data/data"

import blurbox1 from "../images/blurboxes/1.png"
import blurbox12x from "../images/blurboxes/1@2x.png"
import blurbox13x from "../images/blurboxes/1@3x.png"

import blurbox2 from "../images/blurboxes/2.png"
import blurbox22x from "../images/blurboxes/2@2x.png"
import blurbox23x from "../images/blurboxes/2@3x.png"

import blurbox3 from "../images/blurboxes/3.png"
import blurbox32x from "../images/blurboxes/3@2x.png"
import blurbox33x from "../images/blurboxes/3@3x.png"

import blurbox4 from "../images/blurboxes/4.png"
import blurbox42x from "../images/blurboxes/4@2x.png"
import blurbox43x from "../images/blurboxes/4@3x.png"

import blurbox5 from "../images/blurboxes/5.png"
import blurbox52x from "../images/blurboxes/5@2x.png"
import blurbox53x from "../images/blurboxes/5@3x.png"

import blurbox6 from "../images/blurboxes/6.png"
import blurbox62x from "../images/blurboxes/6@2x.png"
import blurbox63x from "../images/blurboxes/6@3x.png"

import appstore from "../images/icons/appstore.png"
import appstore2x from "../images/icons/appstore@2x.png"
import appstore3x from "../images/icons/appstore@3x.png"

import euchre from "../images/screenshots/euchrenight.png"
import euchre2x from "../images/screenshots/euchrenight@2x.png"
import euchre3x from "../images/screenshots/euchrenight@3x.png"

import nationalparks from "../images/screenshots/nationalparks.png"
import nationalparks2x from "../images/screenshots/nationalparks@2x.png"
import nationalparks3x from "../images/screenshots/nationalparks@3x.png"

import scribble from "../images/screenshots/scribble.png"
import scribble2x from "../images/screenshots/scribble@2x.png"
import scribble3x from "../images/screenshots/scribble@3x.png"

import weatherbyshawn from "../images/screenshots/weatherbyshawn.png"
import weatherbyshawn2x from "../images/screenshots/weatherbyshawn@2x.png"
import weatherbyshawn3x from "../images/screenshots/weatherbyshawn@3x.png"

export default function MyWork() {
	return (
		<div id="top" className="flex flex-col relative w-screen overflow-hidden">
			<div className="h-screen mx-auto w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width sm:px-20 flex items-center justify-between">
				<div data-aos-once="true" data-aos="zoom-in-left" className="relative z-10 -mt-14 sm:mt-0 flex flex-col items-start px-2 sm:px-0 space-y-12 sm:space-y-20 w-7/12 flex-shrink-0 overflow-x-visible">
					<h1 className="font-semibold text-5xl sm:text-7xl md:text-8xl tracking-tight whitespace-nowrap ">
						Wizard of
						<br />
						Web & Code
					</h1>
					<h2 className="font-medium text-xl sm:text-3xl md:text-4xl whitespace-nowrap">Software, creatively done.</h2>
					<div className="flex justify-center items-center w-full animate-fade opacity-0">
						<ScrollLink offset={-20} to="featured" smooth={true} duration={1000}>
							<svg className="cursor-pointer animate-bounce" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M30 50V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12.5 32.5L30 50L47.5 32.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</ScrollLink>
					</div>
				</div>
				<div className="relative z-0 flex-grow-0">
					<img className="relative left-4 top-10 sm:top-0 sm:left-10 animate-fade-from-right" alt="" src={blurbox1} srcSet={`${blurbox12x} 2x, ${blurbox13x} 3x`} />
					<img className="relative bottom-60 sm:bottom-44 right-24 sm:right-20 opacity-50 sm:opacity-100 animate-fade-from-bottom" alt="" src={blurbox2} srcSet={`${blurbox22x} 2x, ${blurbox23x} 3x`} />
				</div>
			</div>
			{/* FEATURED PROJECT */}
			<div id="featured" className="relative mx-auto sm:w-11/12 xl:w-9/12 sm:px-10 md:px-0 lg:px-10 2xl:px-20 max-width md:h-screen mb-20 sm:mb-48 md:mt-0">
				<div className="flex flex-col items-center justify-center">
					<h3 className="font-semibold text-primary text-sm">FEATURED iOS APP</h3>
					<h2 className="font-bold text-4xl py-2">Euchre Night</h2>
					<p>Available Now for iOS</p>
					<a href="https://apps.apple.com/us/app/euchre-night/id1582666948" target="_blank" rel="noreferrer">
						<img className="mt-5" alt="Download from the Apple AppStore" src={appstore} srcSet={`${appstore2x} 2x, ${appstore3x} 3x`} />
					</a>
				</div>
				<div className="mt-4 relative flex md:flex-row flex-col-reverse justify-around xl:justify-between items-center">
					<div data-aos-once="true" data-aos="fade-right" className="mt-10 sm:mt-0 relative z-10 flex flex-col space-y-6 w-10/12 md:w-1/2 lg:w-1/2 pr-4 lg:pr-20 xl:pr-28">
						<p className="text-lg lg:text-xl 2xl:text-2xl font-regular leading-relaxed md:pt-20 xl:pt-0">
							<span className="font-semibold">Euchre Night</span>, an app built for iOS, is a one-player version of the classic card game of the same name.
						</p>
						<p className="text-sm 2xl:text-base">Join an AI teammate against two AI opponents for nights of endless fun.</p>
						<p className="text-sm 2xl:text-base">Included are multiple custom-designed, retina-quality themes for when you want to change things up.</p>
						<p className="text-gray-400 text-sm font-bold tracking-wide">#ReactNative #iOS #AI #GameDesign</p>
						<div className="flex space-x-2">
							<a className="" href="https://apps.apple.com/us/app/euchre-night/id1582666948" target="_blank" rel="noopener noreferrer">
								DOWNLOAD
							</a>
							<p className="text-gray-400 font-bold text-sm">|</p>
							<a href="https://github.com/sleeptil3/euchre-native" target="_blank" rel="noopener noreferrer">
								CODE
							</a>
							<p className="text-gray-400 font-bold text-sm">|</p>
							<a href="https://www.figma.com/file/Oe1LIvWV7E8X5QdlW6T5Cv/EuchreGame?node-id=0%3A1" target="_blank" rel="noopener noreferrer">
								FIGMA
							</a>
						</div>
						<div data-aos-offset="200" data-aos-once="true" data-aos="fade" className="hidden sm:flex justify-center items-center pt-10">
							<ScrollLink offset={-100} to="mapped" smooth={true} duration={1500}>
								<svg className="cursor-pointer animate-bounce" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30 50V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M12.5 32.5L30 50L47.5 32.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</ScrollLink>
						</div>
					</div>
					<div className="hidden sm:block absolute -left-40 z-0">
						<img data-aos-once="true" data-aos="fade-left" className="relative left-48 filter blur-xl" alt="" src={blurbox4} srcSet={`${blurbox42x} 2x, ${blurbox43x} 3x`} />
						<img data-aos-once="true" data-aos="fade-right" className="relative bottom-10 left-7 filter blur-lg" alt="" src={blurbox3} srcSet={`${blurbox32x} 2x, ${blurbox33x} 3x`} />
					</div>
					<div data-aos-once="true" data-aos="zoom-in-left" className="w-10/12 mt-8 sm:mt-20 xl:mt-6 mb-10 md:mb-0 md:w-1/2 relative z-10 lg:left-14">
						<img alt="Two iPhones showing Euchre Night open" src={euchre} srcSet={`${euchre2x} 2x, ${euchre3x} 3x`} />
					</div>
				</div>
			</div>
			{/* END FEATURED PROJECT */}
			{/* BEGIN MAPPED PROJECTS */}
			<div id="mapped"></div>
			{features.map((feature, idx) => {
				return (
					<div key={idx} className="relative bg-black mb-20 sm:mb-32 lg:mb-52 py-5 w-screen">
						<ProjectFeature image={feature.image} category={feature.category} title={feature.title} description={feature.description} hashtags={feature.hashtags} visit={feature.visit} frontCode={feature.frontCode} backCode={feature.backCode} reverse={feature.reverse} />
						<div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden w-screen">
							{!feature.reverse ? (
								<div className="absolute left-20 bottom-0 z-0 opacity-30 transform rotate-180 scale-90">
									<img data-aos-offset="200" data-aos-once="true" data-aos="fade-left" className="relative left-48 filter blur-2xl" alt="" src={blurbox5} srcSet={`${blurbox52x} 2x, ${blurbox53x} 3x`} />
									<img data-aos-offset="200" data-aos-once="true" data-aos="fade-right" className="relative right-48 filter blur-2xl" alt="" src={blurbox6} srcSet={`${blurbox62x} 2x, ${blurbox63x} 3x`} />
								</div>
							) : (
								<div className="absolute right-20 bottom-0 z-0 opacity-30 transform scale-90">
									<img data-aos-offset="200" data-aos-once="true" data-aos="fade-left" className="relative right-40 filter blur-2xl" alt="" src={blurbox5} srcSet={`${blurbox52x} 2x, ${blurbox53x} 3x`} />
									<img data-aos-offset="200" data-aos-once="true" data-aos="fade-right" className="filter blur-2xl" alt="" src={blurbox6} srcSet={`${blurbox62x} 2x, ${blurbox63x} 3x`} />
								</div>
							)}
						</div>
					</div>
				)
			})}
			{/* END MAPPED PROJECTS */}
			{/* BEGIN MINI PROJECT */}
			<div className="flex sm:flex-row flex-col sm:justify-around md:justify-between mx-auto w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width mb-32 space-y-20 sm:space-y-0">
				<div data-aos-offset="300" data-aos-once="true" data-aos="fade-left" className="flex flex-col justify-between items-center sm:w-3/12 lg:w-1/4 space-y-10">
					<div>
						<h3 className="font-semibold text-primary text-xs text-center">WEBSITE</h3>
						<h2 className="font-bold text-2xl text-center p-1">ParkBrowser</h2>
					</div>
					<div className="space-y-5 md:w-5/6">
						<p className="text-md sm:text-sm md:text-md xl:text-lg font-regular leading-relaxed">A National Park finder pulling data from the National Parks API.</p>
						<p className="text-gray-400 text-xs font-bold tracking-wide">#React #CSS #APIDataIntegration</p>
						<div className="flex space-x-2 items-center">
							<a href="https://parkbrowser.netlify.app/" target="_blank" rel="noopener noreferrer">
								VISIT
							</a>
							<p className="text-gray-400 font-bold text-xs">|</p>
							<a href="https://git.generalassemb.ly/sclary110/hw-W05D05-react-router-national-parks/tree/main" target="_blank" rel="noopener noreferrer">
								CODE
							</a>
						</div>
					</div>
					<div className="relative bottom-4">
						<img alt="Screenshot of National Parks website" src={nationalparks} srcSet={`${nationalparks2x} 2x, ${nationalparks3x} 3x`} />
					</div>
				</div>
				<div data-aos-offset="300" data-aos-once="true" data-aos="fade" className="flex flex-col justify-between items-center  sm:w-3/12 lg:w-1/4 space-y-10">
					<div>
						<h3 className="font-semibold text-primary text-xs text-center">WEB APP</h3>
						<h2 className="font-bold text-2xl text-center p-1">Weather By Shawn</h2>
					</div>
					<div className="space-y-5 md:w-5/6">
						<p className="text-md sm:text-sm  md:text-md xl:text-lg font-regular leading-relaxed">Local weather information with a ‘deconstructed’ aesthetic.</p>
						<p className="text-gray-400 text-xs font-bold tracking-wide">#HTML #CSS #APIDataIntegration</p>
						<div className="flex space-x-2 items-center">
							<a href="https://pages.git.generalassemb.ly/sclary110/hw-w03d04-open-weather-map/" target="_blank" rel="noopener noreferrer">
								VISIT
							</a>
							<p className="text-gray-400 font-bold text-xs">|</p>
							<a href="https://git.generalassemb.ly/sclary110/hw-w03d04-open-weather-map/tree/master/docs" target="_blank" rel="noopener noreferrer">
								CODE
							</a>
						</div>
					</div>
					<div className="relative bottom-4">
						<img alt="Screenshot of Weather by Shawn website" src={weatherbyshawn} srcSet={`${weatherbyshawn2x} 2x, ${weatherbyshawn3x} 3x`} />
					</div>
				</div>
				<div data-aos-offset="300" data-aos-once="true" data-aos="fade-right" className="flex flex-col justify-between items-center sm:w-3/12 lg:w-1/4 space-y-10">
					<div>
						<h3 className="font-semibold text-primary text-xs text-center">BLOG</h3>
						<h2 className="font-bold text-2xl text-center p-1">Scribble</h2>
					</div>
					<div className="space-y-5 md:w-5/6">
						<p className="text-md sm:text-sm md:text-md xl:text-lg font-regular leading-relaxed">A blog and comment system written entirely in Django using templates.</p>
						<p className="text-gray-400 text-xs font-bold tracking-wide">#Django #HTML #CSS</p>
						<div className="flex space-x-2 items-center">
							<a href="https://git.generalassemb.ly/sclary110/hw-w07d05-scribble/tree/dev" target="_blank" rel="noopener noreferrer">
								CODE
							</a>
						</div>
					</div>
					<div className="relative bottom-4">
						<img alt="Screenshot of Sribble blog" src={scribble} srcSet={`${scribble2x} 2x, ${scribble3x} 3x`} />
					</div>
				</div>
			</div>
			{/* END MINI PROJECTS */}
			<div className="flex justify-center items-center w-screen mb-10 sm:mb-32 transform rotate-180">
				<ScrollLink data-aos-offset="100" data-aos-once="true" data-aos="fade" offset={-100} to="top" smooth={true} duration={1000}>
					<svg className="cursor-pointer animate-bounce" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M30 50V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M12.5 32.5L30 50L47.5 32.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</ScrollLink>
			</div>
		</div>
	)
}
