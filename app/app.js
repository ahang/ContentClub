// ----------------------------
// import dependencies
// ----------------------------
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';

// ----------------------------
// Main Page
// ----------------------------
import Main from './components/Main';
import Header from "./components/layout/Header";

// ----------------------------
// To main dashboard
// ----------------------------
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// ----------------------------
// Data
// ----------------------------
import Data from '../data.json';

const App = () => {
	return (
		<HashRouter>
			<div>
				<Header />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
                <Route exact path="/" component={Main} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/dashboard" render={ (props) => (
                	<Dashboard {...props} data={Data} />
                )} />
			</div>
		</HashRouter>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);