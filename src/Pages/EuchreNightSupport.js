import { useLayoutEffect } from 'react'
import Aos from 'aos'
import { Link } from 'react-router-dom'

export default function EuchreNightSupport() {
	useLayoutEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div className="flex justify-center items-start sm:items-center flex-grow max-w-full">
			<div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:px-10 py-10 px-5 h-full w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width">
				<div data-aos-once="true" data-aos="fade-down" className="mb-8 sm:mb-0">
					<h1 className="relative z-10 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">Support</h1>
					<h2 className="font-medium text-md sm:text-lg md:text-xl">Euchre Night (iOS)</h2>
				</div>
				<div
					data-aos-once="true" data-aos="fade-up"
					className="flex flex-col relative px-4 sm:ml-20 mr-10 sm:pl-20 z-10 font-medium text-lg sm:text-xl md:text-2xl space-y-4"
				>
					<div className="">
						<p className="font-normal text-base"><a href="mailto:euchrenightissues@gmail.com?&subject=[ISSUE%20TITLE]&body=(please%20replace%20the%20subject%20line%20with%20an%20issue%20title)%0D%0A%0D%0A%0ADescription%20of%20Bug%20or%20Feature%20Request:%0D%0A%0D%0A%0D%0A%0D%0A%0ASteps%20to%20Reproduce,%20if%20applicable:%0D%0A%0D%0A%0D%0A%0D%0A%0ADevice%20Model:%20[ex:%20'iPhone%2012%20Pro%20Max']%0D%0A%0D%0A%0D%0A%0D%0A%0A(attach%20any%20screenshots,%20if%20applicable)">Use This Link</a> to submit a bug or feature request.</p>
						<p className="font-normal text-sm mt-1 italic">If you have a GitHub account, submit an issue <a className="text-xs" href="https://github.com/sleeptil3/euchre-native/issues/new/choose" target="_blank" rel="noreferrer">here</a>.</p>
					</div>
					<div className="font-normal text-xs leading-normal">
						<p className="text-gray-700">
							<span className="font-bold text-red-700">IMPORTANT: </span>this project is hosted publicly on GitHub and all issues are tracked there.</p>
						<br />
						<p className="text-gray-700"><span className="font-bold">Anything you submit using this link will be publicly viewable</span>. Do NOT include any personal or sensitive information. Treat this as if it were a post to a discussion board.</p>
						<br />
						<p className="text-gray-700">
							The only infomation that appears is what you type in the subject and body of the email. Your email address will not be displayed. If you prefer to contact me directly, use the<Link className="text-xs" to="/contact"> contact form</Link> on this website to send me a message.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}