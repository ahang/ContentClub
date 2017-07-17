// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import helpers from "../utils/helpers";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { boards: [] };
    }

    componentWillMount() {
        console.log("COMPONENT MOUNTED");

        // As the page loads, grab the articles that already exist in the database
        helpers.getBoards()
            .then((response) => {    
                this.setState({
                    boards: response.data
                });                
                console.log("RESULTS", response);
                console.log("state", this.state.boards);     
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row id={xboard.id}">
                    {/* Title */}
                    <div className="col-sm-12">
                        <h1>{board.boardTitle}</h1>
                    </div>
                </div>
                {/* Username | Date Created */}
                <div className="row">
                    <div className="col-sm-3">
                        <p>{board.username}</p>
                    </div>
                    <div className=" col-sm-3">
                        <p>{board.username}</p>
                    </div>                    
                </div>
                {/* preview image */}
                <div className="row">
                    <div className="img-prev-hor">{board.img}</div>
                </div>
                {/* category */}
                <div className="row">
                    <h6>{board.category}</h6>
                </div>
                {/* description */}
                <div className="row">
                    <hr />
                        <p>{board.contentDescription}</p>
                    <hr />
                </div>
                {/* save option */}
                <div className="row">
                    <p className="right"> save </p>
                </div>
            </div>
        );
    }
};

export default BoardTemplate;