import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';

// Main Page
import Main from './components/Main';

// to main dashboard
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

// import './public/css/index.scss';
require("!style-loader!css-loader!sass-loader!../server/static/css/index.scss");

// ----------------------------
// Data
// ----------------------------
import Data from '../data.json';
import userData from '../userdata.json';

const App = () => {
  return (
    <HashRouter>
	  <div>
		<Route exact path="/register" component={Register} />
		<Route exact path="/login" component={Login} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/dashboard" render={ (props) => (
          <Dashboard {...props} data={userData} />)} />
        <Route exact path="/"  render={ (props) => (
          <Main {...props} data={Data} />)} />  
        <Footer />
    </div>
	</HashRouter>

  )
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
