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

        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReplySubmit = this.handleReplySubmit.bind(this);

    }

    componentDidMount() {
        console.log("mounted");
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
        console.log("id is " + e.target.dataset.id)
        helpers.postComment({id: e.target.dataset.id, author: null, text: this.state.newComment})
            .then((result) => {
                    this.setState({newComment: ''});
                    const { match } = this.props;
                    helpers.getOneBoard({
                        id: match.params.id
                    }).then((res) => {
                        console.log("res is " + JSON.stringify(res));
                        this.setState({currentBoard: res})
                        console.log("this state is: " + this.state.currentBoard)

                    })
                })
    }

    handleReplySubmit(e) {
        e.preventDefault()
        console.log(this.newReply.value)

        console.log("id is " + e.target.dataset.id)
        helpers.postReply({id: e.target.dataset.id, author: null, text: this.newReply.value})
            .then((result) => {
                    this.newReply.value = "";
                    const { match } = this.props;
                    helpers.getOneBoard({
                        id: match.params.id
                    }).then((res) => {
                        console.log("res is " + JSON.stringify(res));
                        this.setState({currentBoard: res})
                        console.log("this state is: " + this.state.currentBoard)

                    })
                })
    }

    renderBoard() {
        const board = this.state.currentBoard.data;
                return (
                    <div>
                        <h3>{board.boardTitle}</h3>
                        <img src={board.contentURL} />
                        <p>{board.contentDescription}</p>
                        <div>{board.comments.map((comment) => {
                            return (
                                <div key={comment._id}>
                                    <h3>{comment.text}</h3>
                                    <div>{comment.replies.map((reply) => {
                                        return (
                                            <div key={reply._id}>
                                                <h4>{reply.text}</h4>
                                            </div>
                                        )
                                    })}
                                    </div>

                                    <form>
                                        <div className="form-group">
                                             <label htmlFor="name">Reply:</label>
                                            <input
                                                /*reply form is not a controlled component to avoid same text repeated in all reply fields*/
                                                className="form-control"
                                                ref={input => this.newReply = input}
                                                /*value={this.state.newReply}
                                                name="newReply"
                                                onChange={this.onChange}*/
                                                required />
                                        </div>
                                        <button
                                            data-id={comment._id}
                                            onClick={this.handleReplySubmit}
                                            className="btn btn-success btn-group-lg">
                                            Reply
                                        </button>
                                    </form>
                                </div>
                            )
                        })}
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Comment:</label>
                                <br />
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    value={this.state.newComment} // input is now a controlled component, value set by state
                                    name="newComment"
                                    onChange={this.onChange}
                                    required />
                            </div>
                            <button
                                data-id={board._id}
                                onClick = {this.handleSubmit}
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