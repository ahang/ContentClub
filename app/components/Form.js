// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// ----------------------------
// Static Bars
// ----------------------------
import FormContainer from './FormContainer';

class Form extends Component {
  render() {
  	return (
  	  <div className="container">
  	    <div className="columns">
  	      <div className="col-md-12 centered">
  	        <h3> Create a Board </h3>
  	        <FormContainer />
  	      </div>
  	     </div>
  	   </div>
  	);
  }
}

export default Form; 