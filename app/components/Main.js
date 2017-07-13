// ----------------------------
// import dependencies
// ----------------------------
import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import Form from "./Form"

// ----------------------------
// Static Bars
// ----------------------------
import Header from './layout/Header';
// import Footer from './layout/Footer';

class Main extends Component {
	render() {

        return(
        	<div>
	        	<div className="container">
	                <h1>Hello Family</h1>
		        </div>

		        <Form />
		    </div>
        );
    }
};

export default Main;