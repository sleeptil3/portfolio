import { useState } from "react"
import { useHistory } from "react-router"
import { logo } from "../Data/alizaStuff"

export default function AlizaModal({ setShowModal }) {
	const [password, setPassword] = useState("")
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === "leezy") history.push("/aliza")
		else console.log("wrong password")
		setPassword("")
	}

	return (
		<>
			<div className="z-10 absolute inset-0 bg-black opacity-50"></div>
			<div className="z-20 absolute inset-0 backdrop-filter backdrop-blur-lg backdrop-brightness-50"></div>
			<div className="z-30 absolute inset-0 flex flex-col justify-center items-center">
				{logo.large}
				<h1 className="text-white font-script text-3xl m-5">Password:</h1>
				<form className="flex flex-col justify-center items-center">
					<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="text-pink-500 text-4xl px-3 py-0 w-48 block rounded-xl border-2 border-pink-500" />
					<button type="submit" onClick={handleSubmit} className="text-white hover:text-pink-500 cursor-pointer text-2xl px-3 py-0 m-5 block w-min">
						Submit
					</button>
				</form>
			</div>
			<div onClick={() => setShowModal(false)} className="z-30 absolute top-10 right-10 text-gray-300 hover:text-pink-500 cursor-pointer">
				{logo.cancel}
			</div>
		</>
	)
}
