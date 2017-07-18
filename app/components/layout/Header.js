
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";
import jwtDecode from "jwt-decode";

class Header extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        Auth.deauthenticateUser();
    }

    getUserName() {
        const token = localStorage.getItem("token");
        const decodeToken = jwtDecode(token);
        return decodeToken.name;
    }

    render() {
        return (
            <div className='row'>
                <nav className="navbar">
                    <a className='navbar-brand' href="/">
                        <img id='logo' src='css/images/logo-white-sm.png' />
                    </a>
                    {Auth.isUserAuthenticated() ? (
                        <div className="nav nav-pills navbar-right">
                            <p>Welcome {this.getUserName()}</p>
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