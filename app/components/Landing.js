import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
  	return (
 	      <center className="landing-position">
          <div className="text-align-center">
            <h1>CONTENT CLUB</h1>
            <Link to ="/login" className="btn landingBtn">Login</Link> 
            <Link to="/register" className="btn landingBtn">Register</Link>
  	      </div>
  	    </center>

  	);
  }
}

export default Landing; 