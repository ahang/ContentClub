// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import helpers from "../utils/helpers";
import Board from './Board';

import Header from './layout/Header.js';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      selectedBoard: null,
    };
    this.getOneBoard = this.getOneBoard.bind(this);
    this.generateImage = this.generateImage.bind(this);
  }

componentWillMount() {
  console.log("COMPONENT MOUNTED");

        // As the page loads, grab the articles that already exist in the database
  helpers.getBoards()
  .then((response) => {
    this.setState({
      boards: response.data
    });
    // console.log("RESULTS", response);
    // console.log("state", this.state.boards);
  })
  }


    getOneBoard (e) {
        console.log("dataset: " + e.target.dataset.id);
        helpers.getOneBoard({id: e.target.dataset.id}
        ).then((res) => {
            this.setState({selectedBoard: res})
            //console.log("This is the board! " + JSON.stringify(this.state.selectedBoard));
        })
    }

    generateImage () {
        return this.state.boards.map((board) => {
            return (
               <div className="full-board col-sm-3 off-set-3" key={board.boardTitle} id={board._id}>
                    <div className="board-card item card">
                        <div className="title-name ">
                            <figure className="board-img img-boxart">

                                <Link to={`/board/${board._id}`}><img
                                    className="img-art"
                                    data-id={board._id}
                                    src={board.contentURL}
                                    alt={board.contentDescription}
                                    title={board.contentDescription}
                                    value = {board._id}/>
                                </Link>
                                <div className="board-body-text">
                                <br />
                                <div className="board-title">{board.boardTitle}</div>
                                    <p className="board-info">{board.category}</p>
                                    <br />
                                    </div>
                            </figure>

                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
            <Header />
                <div className="col-md-9">    
                    <div className="full-background">
                        { this.state.selectedBoard ? <Board something={this.state.selectedBoard}/>:<div></div>}
                        { this.generateImage() }
                    </div>
                </div>
                <div className="col-md-3">
                    <hr />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <hr />
                </div>
            </div>
        );
    }
};

export default Dashboard;