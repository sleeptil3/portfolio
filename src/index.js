import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import "./index.css"
import App from "./App"
import Aliza from "./Aliza/Aliza"

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/aliza" component={Aliza} />
				<Route path="/" component={App} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)
