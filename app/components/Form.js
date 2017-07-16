// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./layout/Header";

// ----------------------------
// Static Dependencie
// ----------------------------
import FormContainer from './FormContainer';

class Form extends Component {
  render() {
    return (
      <div>
        <Header />
  	    <div className="container">
  	      <div className="columns">
  	        <div className="col-md-12 centered">
  	          <h3> Create a Board </h3>
  	          <FormContainer />
  	        </div>
  	      </div>
  	    </div>
      </div>
  	);
  }
}

export default Form; 