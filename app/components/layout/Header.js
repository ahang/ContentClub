
import React from "react";
import { Link } from "react-router-dom";

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
            </nav>
        </div>
    )
}

export default Header;