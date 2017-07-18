// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import helpers from "../utils/helpers";
import { withRouter } from 'react-router-dom'



class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentBoard: null,
            comments: '',
            newComment: '',
            id: this.props
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        console.log("mounted");
        console.log("board id" + this.state.id);
        const { match } = this.props;
        helpers.getOneBoard({ 
            id: match.params.id 
        }).then((res) => {
            console.log("res is " + JSON.stringify(res));
            this.setState({currentBoard: res}) 
            console.log("this state is: " + this.state.currentBoard)
        })

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.newComment)
        helpers.postComment({author: null, text: this.state.newComment})
            .then((result) => {
                    this.setState({newComment: ''});
                    
                })
    }

    renderBoard() {
        const board = this.state.currentBoard.data;
                return ( 
                    <div>
                        <h3>{board.boardTitle}</h3>
                        <img src={board.contentURL} />
                        <p>{board.contentDescription}</p>
                        <p>Will this show up</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Comment:</label>
                                <br />
                                <textarea 
                                    className="form-control"
                                    rows="5"
                                    value={this.state.newComment} // input is now a controlled component, value set by state
                                    name="comment"
                                    onChange={this.onChange}
                                    required />
                            </div>
                            <button 
                                type="submit"
                                id={this.state.id}
                                className="btn btn-success btn-group-lg">
                                Submit
                            </button>
                        </form>
                    </div>
                )
    }

    render() {
        const { match } = this.props;
        return (
            <div className="container">
                {this.state.currentBoard ? this.renderBoard():<div>loading...</div>}
            </div>
        );
    }
};

export default withRouter(Board);