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
        	    <div>
                    <h1><p className="left">Welcome, Username</p></h1><p className="right">Join a Board</p>
                </div>
                <div className="col-sm-3 offset-sm-3 dashboard-boards"><Link to="/create">Create Board</Link></div>
                <div className="col-sm-3 offset-sm-3 dashboard-boards">My Boards</div>
                <div className="col-sm-3 offset-sm-3 dashboard-boards">Public Boards</div>
                <div className="col-sm-3 offset-sm-3 dashboard-boards">Saved Boards</div>
                <br />
	        </div>
        )
    }
}

export default Dashboard;