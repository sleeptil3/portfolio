import { Switch, Route } from "react-router-dom"
import { useLayoutEffect } from "react"
import Aos from "aos"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MyWork from "./Pages/MyWork"
import MyInfo from "./Pages/MyInfo"
import MySkills from "./Pages/MySkills"
import ContactForm from "./Pages/ContactForm"
import EuchreNightSupport from "./Pages/EuchreNightSupport"
// import AlizaModal from "./Aliza/AlizaModal"

function App() {
	// const [showAlizaModal, setShowAlizaModal] = useState(false)

	useLayoutEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div className="min-h-screen font-montserrat flex flex-col justify-between max-w-screen overflow-hidden">
			{/* {showAlizaModal && <AlizaModal setShowModal={setShowAlizaModal} />} */}
			<div className="relative z-0 flex-grow flex flex-col w-full">
				<Header />
				<main className="flex-grow flex flex-col w-full">
					<Switch>
						<Route path="/skills" component={MySkills} />
						<Route path="/info" component={MyInfo} />
						<Route path="/contact" component={ContactForm} />
						<Route path="/euchrenight/support" component={EuchreNightSupport} />
						<Route path="/" component={MyWork} />
					</Switch>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default App
