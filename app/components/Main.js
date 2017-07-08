// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

// ----------------------------
// Static Bars
// ----------------------------
// import Header from './layout/Header';
import HeaderUser from './layout/HeaderUser';
// import Footer from './layout/Footer';

class Main extends Component {
	render() {

        return(
        	<div className="container">
                <HeaderUser />
                <h1>Hello Family</h1>
                
                
	        </div>
        );
    }
};

export default Main;