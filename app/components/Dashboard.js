// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';


// ----------------------------
// Static Bars
// ----------------------------


import HeaderUser from './layout/HeaderUser';
// import Footer from './layout/Footer';

class Dashboard extends Component {
	render() {

        return(
            <div className="container">
                <h1><p className="col-sm-6 left">Welcome, Username</p></h1>
        	    <div className="row" id="welcome">
                </div>

                {/* ----- Board Examples ----- */}

                <div className="full-board col-sm-3">Create Board
                    <div className="board item card img-boxart">
                        <a className="title-name">
                            <figure className="board-img img-boxart">
                                <img className="" src="css/images/matt-cannon-230683.jpg"/>
                            </figure>
                            <div className="board-body-text"> 
                                <h3 className="board-title">Title Info</h3>
                                <p className="board info">description</p>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="full-board col-sm-3">My Boards
                    <div className="board item card">
                        <a className="title-name">
                            <figure className="board-img img-boxart">
                                <img className="img-boxart" src="css/images/matt-cannon-230683.jpg"/>
                            </figure>
                            <div className="board-body-text"> 
                                <h3 className="board-title">Title Info</h3>
                                <p className="board info">description</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="full-board col-sm-3">Saved Board
                    <div className="board item card">
                        <a className="title-name">
                            <figure className="board-img img-boxart">
                                <img />
                            </figure>
                            <div className="board-body-text"> 
                                <h3 className="board-title">Title Info</h3>
                                <p className="board info">description</p>
                            </div>
                        </a>
                    </div>
                </div>
                {/* <div className="row">
                    <div>
                        <div className="col-sm-3 offset-sm-3 dashboard-boards"><Link to="/create"></Link></div>
                        <div className="row">Create Board</div>
                    </div>
                    <div>
                        <div className="col-sm-3 offset-sm-3 dashboard-boards"></div> 
                        <div>My Boards</div>
                    </div>
                    <div>
                        <div className="col-sm-3 offset-sm-3 dashboard-boards"></div>
                        <div>Saved Boards</div>
                    </div>
                </div>*/}

                <br />
	        </div>
        )
    }
}

export default Dashboard;