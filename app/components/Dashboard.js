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
                <h1>Welcome, Username</h1>
                <hr />
                <div className="col-sm-2 offset-sm-2 dashboard-boards">Create Board</div>
                <div className="col-sm-2 offset-sm-2 dashboard-boards">Join a Board</div>
                <div className="col-sm-2 offset-sm-2 dashboard-boards">My Boards</div>
                <div className="col-sm-2 offset-sm-2 dashboard-boards">Public Boards</div>
                <div className="col-sm-2 offset-sm-2 dashboard-boards">Trending Boards</div>
                <div className="col-sm-2 offset-sm-2 dashboard-boards">Saved Boards</div>
                <br />
                <hr />
	        </div>
        )
    }
}

export default Dashboard;