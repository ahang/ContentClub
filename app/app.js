import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';

// Main Page
import Main from './components/Main';
// to main dashboard
import Dashboard from './components/Dashboard';
import Form from './components/Form';


const App = () => {
	return (
		<HashRouter>
			<div>
				<Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Main} />
                <Route exact path="/form" component={Form} />
			</div>
		</HashRouter>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);