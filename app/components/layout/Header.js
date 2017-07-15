
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        Auth.deauthenticateUser();

    }

    render() {
        return (
            <div className='row container'>
                <nav className="navbar">
                    <a className='navbar-brand' href="/">
                        <img id='logo' src='css/images/logo-white-sm.png' />
                    </a>
                    {Auth.isUserAuthenticated() ? (
                        <div className="nav nav-pills navbar-right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><p onClick={this.handleOnClick} className="btn">Log out</p></li>
                        </div>
                    ): (
                        <div className="nav nav-pills navbar-right">
                            <li><Link to ="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </div>
                    )}
                </nav>
            </div>
        )
    }
}

export default Header;