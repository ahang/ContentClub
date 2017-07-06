// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';

// ----------------------------
// Static Bars
// ----------------------------
// import Header from './layout/Header';
// import Footer from './layout/Footer';

class Dashboard extends Component {
	render() {

        return(
        	<div>
	            {/*</ Header>*/}
                <nav className="brand">

                </nav>
                <div className='row'>
                    <h3 className='text-center'>Welcome {NameOfPerson}</h3>
                </div>
                <div className='row'>
	                <div className='testing col-sm-4'></div>
	                <div className='testing col-sm-4'></div>	
	                <div className='testing col-sm-4'></div>	
	            </div>
	        </div>
        )
    }
}

export default Dashboard;