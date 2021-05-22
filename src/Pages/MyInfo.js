import blurbox1 from '../images/blurboxes/1.png'
import blurbox2 from '../images/blurboxes/2.png'

export default function MyInfo() {
	return (
		<div className="flex justify-center items-center">
			<div className="absolute right-20 top-0 sm:top-40 z-0 flex-grow-0 opacity-50 transform scale-50 sm:transform-none">
				{/* Animation Idea: on scroll have top increment right slide (translate-x) and bottom increment left slide (-translate-x) */}
				<img className="relative right-32 bottom-20" src={blurbox1} alt="" />
				<img className="relative right-96 bottom-20 opacity-50 sm:opacity-100" src={blurbox2} alt="" />
			</div>
			<div className="relative sm:top-48 flex flex-col sm:flex-row mt-8 sm:mt-0 sm:justify-center sm:items-center h-full w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width sm:px-10">
				<div className="mb-8 sm:mb-0">
					<h1 className="relative z-10 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">Info</h1>
					<h2 className="font-medium text-md sm:text-lg md:text-xl">Let's chat.</h2>
				</div>
				<div className="flex sm:flex-col flex-wrap space-x-10 sm:space-x-0 sm:mr-60 relative px-4 sm:ml-20 sm:pl-20 z-10 font-medium text-lg sm:text-xl md:text-2xl">
					<div>
						<p className="font-semibold">Contact</p>
						<a href="https://www.linkedin.com/in/shclary/" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">LinkedIn</a>
						<a href="mailto:sleeptil3software@gmail.com" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">Email</a>
						<br />
					</div>
					<div>
						<p className="font-semibold">Resume</p>
						<a href="https://drive.google.com/file/d/1SgCHA2ZJTfTdU079DKiAw5SPvaGwX0Ja/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">Download</a>
						<br />
					</div>
					<div>
						<p className="font-semibold">Code</p>
						<a href="https://github.com/sleeptil3" target="_blank" rel="noopener noreferrer" className="block text-lg font-regular hover:text-primary">Github</a>
					</div>
				</div>
			</div>
		</div>
	)
}
