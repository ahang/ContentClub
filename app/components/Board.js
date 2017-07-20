// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import helpers from "../utils/helpers";
import { withRouter } from 'react-router-dom'
import jwtDecode from "jwt-decode";

import Header from './layout/Header.js';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      currentBoard: null,
      comments: '',
      newComment: '',
      newReply: [""],
      newReplyText: null
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    /*this.handleReplyChange = this.handleReplyChange.bind(this);*/
    this.handleReplySubmit = this.handleReplySubmit.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.setUser();
    const { match } = this.props;
    helpers.getOneBoard({
      id: match.params.id
    }).then((res) => {
      this.setState({currentBoard: res})
    })
  }

  setUser() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const decodeToken = jwtDecode(token);
      this.setState({ user: decodeToken.name })
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleReplyChange (i,e) {
    let stateCopy = this.state
    stateCopy.newReply = stateCopy.newReply.slice();
    stateCopy.newReply[i] = e.target.value
    console.log(stateCopy);
    this.setState(stateCopy);
    this.setState({newReplyText: e.target.value})
    console.log(this.state.newReply);
  }

  handleSubmit(e) {
    e.preventDefault()
    //console.log(this.state.newComment)
    //console.log("id is " + e.target.dataset.id)
    helpers.postComment({id: e.target.dataset.id, author: this.state.user, text: this.state.newComment})
    .then((result) => {
      this.setState({newComment: ''});
      const { match } = this.props;
      helpers.getOneBoard({
        id: match.params.id
      }).then((res) => {
        //console.log("res is " + JSON.stringify(res));
        this.setState({currentBoard: res})
        //console.log("this state is: " + this.state.currentBoard)
        })
    })
  }

  handleReplySubmit(e) {
    e.preventDefault()
    console.log(this.state.newReplyText)
    let text = ""
    for (let i = 0; i < this.state.newReply.length; i++) {
      if (this.state.newReply[i]) {
        text = this.state.newReply[i]
      }
    }
    console.log(text)
    //console.log("id is " + e.target.dataset.id)
    helpers.postReply({id: e.target.dataset.id, author: this.state.user, text: text})
    .then((result) => {
      this.setState({newReply: [], newReplyText: null});
      const { match } = this.props;
      helpers.getOneBoard({
        id: match.params.id
      }).then((res) => {
        //console.log("res is " + JSON.stringify(res));
        this.setState({currentBoard: res})
        console.log(this.state)
        //console.log("this state is: " + this.state.currentBoard)
        })
      })
  }

  renderBoard() {
    const board = this.state.currentBoard.data;
    return (
      <div className="container currentContent col-md-8 col-centered">
        <center>
          <h1>{board.boardTitle}</h1>
          <img src={board.contentURL} height="200"/>
          <p className="contentDescription">{board.contentDescription}</p>
        </center>
        <div className="commentContent">
          {board.comments.map((comment, i) => {
          return (
            <div key={i}>
              <h3>{comment.text} - {comment.author}</h3>
              <div>{comment.replies.map((reply) => {
                return (
                  <div key={reply._id}>
                  <h4>{reply.text} - {reply.author}</h4>
                  </div>
                )
              })}
              </div>

            <form>
              <div className="form-group">
                <h5 htmlFor="name">Reply:</h5>
                  <input
                    /*trying to control the reply form*/
                    className="form-control"
                    
                    value={this.state.newReply[i]}
                    /*name="newReply[i]"*/
                    onChange={this.handleReplyChange.bind(this, i)}
                    required />
              </div>
              <center>
              <button
                data-id={comment._id}
                onClick={this.handleReplySubmit.bind(this)}
                className="btn replyBtn">
                Reply
              </button>
              </center>
            </form>
            </div>
          )
        })}
        </div>
        <form>
          <div className="form-group">
            <br />
            <h5 htmlFor="name">Comment:</h5>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.newComment} // input is now a controlled component, value set by state
              name="newComment"
              onChange={this.onChange}
              required />
          </div>
          <center>
          <button
            data-id={board._id}
            onClick = {this.handleSubmit}
            className="btn commentBtn">
            Submit
          </button>
          </center>
        </form>
      </div>
    )
  }

  render() {
    const { match } = this.props;
    return (
      <div className="">
        <div className="header">
          <Header />
        </div>
        {this.state.currentBoard ? this.renderBoard():<div>loading...</div>}
      </div>
    );
  }

};

export default withRouter(Board);