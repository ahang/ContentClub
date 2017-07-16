import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
  	return (
 	  <div className="jumbotron">
  		<h1 className="center">Welcome to the Content Club!</h1>
  	      <div className="col-md-12 centered">
			<Link to ="/login" className="btn landingBtn">Login</Link> 
			<Link to="/register" className="btn landingBtn">Register</Link>
  	      </div>
  	  </div>

  	);
  }
}

export default Landing; 