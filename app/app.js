import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';


import Dashboard from './components/Dashboard';

const App = () => {
	return (
		<HashRouter>
			<div>
				<h1>Hello Fam</h1>
				<Route exact path="/Dashboard" component={Dashboard} />
			</div>
		</HashRouter>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);