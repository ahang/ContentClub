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
        }

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

    renderBoard() {
        const board = this.state.currentBoard.data;
                return ( 
                    <div>
                        <h3>{board.boardTitle}</h3>
                        <img src={board.contentURL} />
                        <p>{board.contentDescription}</p>
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