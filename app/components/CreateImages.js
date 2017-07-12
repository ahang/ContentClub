// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';


class CreateImages extends Component {
    constructor(props) {
        super(props);
    }

    generateImage () {
        return this.props.data.map( (board) => {
            return (
               <div className="full-board col-sm-3" key={board.title}>
                    <div className="board item card">
                        <a className="title-name">
                            <figure className="board-img img-boxart">
                                <img className="img-boxart" src={board.img} alt={`Image of ${board.title}`} />
                            </figure>
                            <div className="board-body-text"> 
                                <h3 className="board-title">{board.title}</h3>
                                <p className="board info">{board.description}</p>
                            </div>
                        </a>
                    </div>
                </div>                 
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        { /* This is what actually generates the images */ }
                        { this.generateImage() }
                    </div>
                </div>
            </div>
        );
    }
};

export default CreateImages;