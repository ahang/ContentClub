// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import helpers from "../utils/helpers";


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            boards: [],
            comments: '',
        }

        this.handleComments = this.handleComments.bind(this);
    }
    
    handleComments(e) {
        this.setState({ comments: e.target.value }, () => console.log('comments:', this.state.comments));
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
                <div className="row id={board._id}">
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
                    <div className="img-prev-hor">{board.contentURL}</div>
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
                {/* Add a comment */}
                <div className="form-group">
                    <center> comments </center><input type="text" className="form-control" value={this.state.comment} onChange={this.handleComment} />
                </div>
            </div>
        );
    }
};

export default Board;