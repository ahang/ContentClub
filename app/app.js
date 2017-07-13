import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';

// Main Page
import Main from './components/Main';
import Header from "./components/layout/Header"
// to main dashboard
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// import './public/css/index.scss';
require("!style-loader!css-loader!sass-loader!../public/css/index.scss");

// ----------------------------
// Data
// ----------------------------
import Data from '../data.json';
import userData from '../userdata.json';

const App = () => {
	return (
		<HashRouter>
			<div>
				<Header />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
                <Route exact path="/"  render={ (props) => (
                	<Main {...props} data={Data} />)} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/dashboard" render={ (props) => (
                	<Dashboard {...props} data={userData} />)} />
                
			</div>
		</HashRouter>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
