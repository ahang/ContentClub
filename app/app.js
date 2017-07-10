import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';

// Main Page
import Main from './components/Main';
import Header from "./components/layout/Header"
// to main dashboard
import Dashboard from './components/Dashboard';
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"


const App = () => {
	return (
		<HashRouter>
			<div>
				<Header />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
                <Route exact path="/" component={Main} />
                
			</div>
		</HashRouter>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
