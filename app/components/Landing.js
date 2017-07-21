import React, {Component} from 'react';
import { Link } from "react-router-dom";


// <div className="landing-background"></div>

class Landing extends Component {
  render() {
  	return (
 	      <center className="background-content landing-background landing-position">
          <div className="text-align-center">
            <h1>  
                CONTENT CLUB          
            </h1>
            <Link to="/register" className="btn landingBtn ">GET STARTED</Link>
            <Link to ="/login" className="btn landingBtn">LOGIN</Link> 
          </div>
  	    </center>

  	);
  }
}

export default Landing; 