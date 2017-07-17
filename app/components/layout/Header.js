
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
      <div className='row container-fluid'>
        <nav className="navbar">
          <a className='navbar-brand' href="/">
            <img id='logo' src='css/images/logo-white-sm.png' height="30" width="30" />
          </a>
          {Auth.isUserAuthenticated() ? (
            <div className="nav nav-pills navbar-right">
              <li><Link to="/" className="btn">Home</Link></li>
              <li><Link to="/dashboard" className="btn">Dashboard</Link></li>
              <li><p onClick={this.handleOnClick} className="btn">Log out</p></li>
            </div>
          ): (
            <div className="nav nav-pills navbar-right">
              <li><Link to ="/login" className="btn">Login</Link></li>
              <li><Link to="/register" className="btn">Register</Link></li>
            </div>
          )}
        </nav>
      </div>
    )
  }
}

export default Header;