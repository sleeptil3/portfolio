import { Switch, Route, useHistory } from "react-router-dom"
import { useState } from "react"
import Header from "./Components/Header"
import MyWork from "./Pages/MyWork"
import MyInfo from "./Pages/MyInfo"
import MySkills from "./Pages/MySkills"
import Footer from "./Components/Footer"
import ContactForm from "./Pages/ContactForm"
import EuchreNightSupport from "./Pages/EuchreNightSupport"
import { logo } from "./Data/alizaStuff"

function App() {
	const [showAlizaModal, setShowAlizaModal] = useState(false)
	const [password, setPassword] = useState("")
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === "leezy") history.push("/aliza")
		else console.log("wrong password")
		setPassword("")
	}

	return (
		<div className="min-h-screen font-montserrat flex flex-col justify-between max-w-screen">
			{showAlizaModal && (
				<>
					<div className="z-10 absolute inset-0 bg-black opacity-50"></div>
					<div className="z-20 absolute inset-0 backdrop-filter backdrop-blur-lg backdrop-brightness-50"></div>
					<div className="z-30 absolute inset-0 flex flex-col justify-center items-center">
						{logo.large}
						<h1 className="text-white font-script text-3xl m-5">Password:</h1>
						<form className="flex flex-col justify-center items-center">
							<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="text-pink-500 text-4xl px-3 py-0 w-48 block" />
							<button type="submit" onClick={handleSubmit} className="text-pink-500 text-2xl px-3 py-0 w-48 m-5 block">
								Submit
							</button>
						</form>
					</div>
				</>
			)}
			<div className="relative z-0 flex-grow flex flex-col w-full">
				<Header setShowModal={setShowAlizaModal} />
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
