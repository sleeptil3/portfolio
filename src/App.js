import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import MyWork from './Pages/MyWork'
import MyInfo from './Pages/MyInfo'
import MySkills from './Pages/MySkills'
import Footer from './Components/Footer'
import ContactForm from './Pages/ContactForm'
import EuchreNightSupport from './Pages/EuchreNightSupport'

function App() {
	return (
		<div className="min-h-screen font-montserrat flex flex-col justify-between max-w-screen">
			<div className="flex-grow flex flex-col w-full">
				<Header />
				<main className="flex-grow flex flex-col w-full">
					<Switch>
						<Route exact path="/" component={ MyWork } />
						<Route path="/skills" component={ MySkills } />
						<Route path="/info" component={ MyInfo } />
						<Route path="/contact" component={ ContactForm } />
						<Route path="/euchrenight/support" component={ EuchreNightSupport } />
					</Switch>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;