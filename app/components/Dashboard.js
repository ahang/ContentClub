// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';


// ----------------------------
// Static Bars
// ----------------------------

import Header from './layout/Header';
// import Footer from './layout/Footer';

class Dashboard extends Component {
	render() {

        return(
            <div className="container">
                <Header />
        	
                <h1>Hello Dashboard</h1>
                
	        </div>
        )
    }
}

export default Dashboard;