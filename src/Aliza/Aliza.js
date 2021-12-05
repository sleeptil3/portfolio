import ReactPlayer from "react-player/youtube"
import { present } from "../Data/alizaStuff"

export default function Aliza() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center my-20">
			{present}
			<h1 className="text-black font-script text-3xl m-5">Happy Birthday Aliza!</h1>
			<section className="text-lg max-w-xl m-5">
				<p className="m-4">I wish I could be there to celebrate with you, but I left Los Angeles for a while during the pandemic.</p>
				<p className="m-4">One of my favorite memories with you is the video you see below. I'm pretty sure it was your first "musical" moment ever, which I couldn't be more proud of! You and I shared a duet from the musical 'Wicked'.</p>
				<p className="m-4">It's a song called 'Popular' where two life-long friends first realize how special one another is. I knew you were special the first time I saw you and you are EASILY one of the things I miss the most about Los Angeles.</p>
			</section>
			<ReactPlayer url="https://www.youtube.com/watch?v=OecJeRk6fqI" controls={true} />
			<section className="text-lg max-w-xl m-5 mb-20">
				<p className="m-4">I'm so glad we captured this moment on video. In the box, you'll find a few things to commemorate this moment. Share one or two of them with your mom. I'm sure she'd like one.</p>

				<p className="m-4">
					If you want to see what 'Popular' looks like on stage - which I highly recommend -{" "}
					<span>
						<a className="text-lg" href="https://www.youtube.com/watch?v=TrzkijXzqvk" target="_blank" rel="noreferrer">
							watch this video
						</a>
					</span>{" "}
					for now and make your mom take you next time it's in Los Angeles!
				</p>
				<p className="m-4">Also, below is a short video of us from the last 7 years.</p>
				<p className="m-4 mt-12">Hope to see you soon,</p>
				<h1 className="text-black font-script text-3xl m-5">Uncle Shawn</h1>
			</section>
			<ReactPlayer url="https://www.youtube.com/watch?v=kS6T9px0BzY" controls={true} />
			<a className="mt-20" href="/">
				Back to sleeptil3software.com
			</a>
		</div>
	)
}
