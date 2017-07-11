// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';


// ----------------------------
// Static Bars
// ----------------------------

// defining the variable
let Image = (props) => {
	// define a a source variable that will link us to the images
	let source = '.assets/images/' + props.source;

	// defining a style for our images that will be ported to the dashboard
	let style = {
		width: '500px',
    	margin: '10px 5px 0px 5px'
	};


	return (
		<img src = { source } style = { style } />
	);
};

export default Image;