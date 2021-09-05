import { useState, useLayoutEffect } from 'react'
import Aos from 'aos'

export default function ContactForm() {
	const [ showForm, setShowForm ] = useState(true)
	const [ formData, setFormData ] = useState({
		name: "",
		email: "",
		message: ""
	})

	const handleChange = (e) => {
		const [ key, value ] = [ e.target.name, e.target.value ]
		console.log(key, value)
		setFormData({ ...formData, [ key ]: value })
	}

	const encode = (data) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[ key ]))
			.join("&")
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formData })
		})
			.then(() => setShowForm(false))
			.catch(error => alert(error))
			.finally(() => setFormData({
				name: "",
				email: "",
				message: ""
			}))
	}

	useLayoutEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div className="flex justify-center items-start sm:items-center flex-grow max-w-full">
			<div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:px-10 py-10 px-5 h-full w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 max-width">
				<div data-aos-once="true" data-aos="fade-down" className="mb-8 sm:mb-0">
					<h1 className="relative z-10 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">Contact</h1>
					<h2 className="font-medium text-md sm:text-lg md:text-xl">Let's chat.</h2>
				</div>
				{ showForm ?
					<form
						name="contact"
						onSubmit={ handleSubmit }
						data-aos-once="true" data-aos="fade-up"
						className="flex flex-col relative px-4 sm:ml-20 mr-10 sm:pl-20 z-10 font-medium text-lg sm:text-xl md:text-2xl space-y-4">
						<div className="">
							<label className="font-semibold text-lg block">
								Your Name<input className="block border w-full border-black rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-0" type="text" name="name" value={ formData.name } onChange={ handleChange } />
							</label>
						</div>
						<div>
							<label className="font-semibold text-lg block">
								Email<input className="block border w-full border-black rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-0" type="text" name="email" value={ formData.email } onChange={ handleChange } />
							</label>
						</div>
						<div>
							<label className="font-semibold text-lg block">
								Message<textarea className="block h-24 w-full border border-black rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-0" type="text" name="message" value={ formData.message } onChange={ handleChange } />
							</label>
						</div>
						<input type="submit" className="py-2 hover:text-white text-gray-200 w-24 relative top-4 font-regular text-sm cursor-pointer bg-gradient-to-r from-pink-600 to-purple-700 focus:outline-none focus:ring-0 " />
					</form>
					: <div className="flex flex-col relative px-4 sm:ml-20 mr-10 sm:pl-20 z-10 font-medium text-lg sm:text-xl md:text-2xl space-y-4">
						<h1 className="relative z-10 font-semibold text-xl sm:text-3xl md:text-4xl tracking-tight">Thanks</h1>
						<h2 className="font-medium text-md sm:text-lg md:text-xl">I'll get back to you soon.</h2>
					</div>
				}
			</div>
		</div>
	)
}