import blurbox1 from '../images/blurboxes/1.png'
import blurbox2 from '../images/blurboxes/2.png'

export default function MySkills() {
	return (
		<div className="flex justify-center items-center mb-10 sm:mb-0 sm:mt-32">
			<div className="relative flex flex-col sm:flex-row mt-8 sm:mt-0 sm:justify-center sm:items-center h-full w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width sm:px-10">
				<div className="mb-8 sm:mb-0">
					<h1 className="relative z-10 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">Skills</h1>
					<h2 className="font-medium text-md sm:text-lg md:text-xl">(and growing everyday)</h2>
				</div>
				<div className="relative px-4 sm:pl-20 z-10 font-medium">
					<p className="text-lg font-semibold">Code</p>
					<p className="text-md">JavaScript | Python</p>
					<br />
					<p className="text-lg font-semibold">Front End</p>
					<p className="text-md">React | HTML | CSS | Tailwind | Sass</p>
					<br />
					<p className="text-lg font-semibold">Back End</p>
					<p className="text-md">Node.JS | Express | Django | MongoDB | PostgreSQL</p>
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
				<div className="absolute right-0 top-0 sm:top-40 z-0 flex-grow-0 opacity-50 transform scale-50 sm:transform-none">
					{/* Animation Idea: on scroll have top increment right slide (translate-x) and bottom increment left slide (-translate-x) */}
					<img className="relative left-32 -top-48 sm:top-0 sm:left-10" src={blurbox1} alt="" />
					<img className="relative bottom-80 sm:bottom-44 right-24 sm:right-20 opacity-50 sm:opacity-100" src={blurbox2} alt="" />
				</div>
				{/* END BLUR BOX */}
			</div>
		</div>
	)
}
