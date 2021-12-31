import blurbox1 from "../images/blurboxes/1.png"
import blurbox12x from "../images/blurboxes/1@2x.png"
import blurbox13x from "../images/blurboxes/1@3x.png"

import blurbox2 from "../images/blurboxes/2.png"
import blurbox22x from "../images/blurboxes/2@2x.png"
import blurbox23x from "../images/blurboxes/2@3x.png"

export default function MySkills() {
	return (
		<div className="flex justify-center items-center mb-10 sm:mb-20 sm:mt-32">
			<div className="relative flex flex-col sm:flex-row sm:justify-center sm:items-center py-10 px-5 h-full w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width sm:px-10">
				<div data-aos-once="true" data-aos="fade-down" className="mb-8 sm:mb-0">
					<h1 className="relative z-10 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">Skills</h1>
					<h2 className="font-medium text-md sm:text-lg md:text-xl">(and growing everyday)</h2>
				</div>
				<div data-aos-once="true" data-aos="fade-up" className="relative px-4 sm:pl-20 z-10 font-medium">
					<p className="text-lg font-semibold">Code</p>
					<p className="text-md">JavaScript | Python | Swift</p>
					<br />
					<p className="text-lg font-semibold">Front End</p>
					<p className="text-md">React | React-Native | HTML | CSS | Tailwind</p>
					<br />
					<p className="text-lg font-semibold">Back End</p>
					<p className="text-md">Node.JS | Express | MongoDB | Django</p>
					<p>PostgreSQL | User Authentication</p>
					<br />
					<p className="text-lg font-semibold">Design</p>
					<p className="text-md">Figma | Adobe Creative Suite</p>
					<br />
					<p className="text-lg font-semibold">Collaboration</p>
					<p className="text-md">Github</p>
					<br />
					<p className="text-lg font-semibold">Publishing</p>
					<p className="text-md">Netlify</p>
					<p className="text-md">Heroku</p>
					<p className="text-md">Github Pages</p>
				</div>
				{/* BLUR BOX */}
				<div className="absolute right-0 -top-20 z-0 flex-grow-0 opacity-25 transform scale-50 sm:transform-none">
					<img data-aos-once="true" data-aos="fade-left" className="relative left-32 -top-48 sm:left-10" alt="" src={blurbox1} srcSet={`${blurbox12x} 2x, ${blurbox13x} 3x`} />
					<img data-aos-once="true" data-aos="fade-right" className="relative bottom-80 sm:bottom-44 right-24 sm:right-48" alt="" src={blurbox2} srcSet={`${blurbox22x} 2x, ${blurbox23x} 3x`} />
				</div>
				{/* END BLUR BOX */}
			</div>
		</div>
	)
}
