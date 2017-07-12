
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";

const Header = () => {

    return (                
        <div className='row container'>
            <nav className="navbar">
                <a className='navbar-brand' href="/"> 
                    <img id='logo' src='css/images/logo.png' />
                </a>
                <ul className="nav nav-pills navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                {Auth.isUserAuthenticated() ? (
                    <div className="top-bar-right">
                        <Link to="/logout">Log out</Link>
                    </div>
                ): (
                    <div className="top-bar-right">
                        <Link to ="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Header;