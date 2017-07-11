
import React from "react";
import { Link } from "react-router-dom";

const HeaderUser = () => {
    return (                
        <div>
            <nav className="navbar">
                <a className='navbar-brand' href="/"> 
                    <div id="logo" className="circle"></div>
                </a>
                <ul className="nav nav-pills navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/">Messages</Link></li>
                    <li className="right">
                        <form><input className="join-board-form" type="text" name="boardcode" placeholder="Find a Board" /></form>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderUser;