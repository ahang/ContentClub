// ----------------------------
// import dependencies
// ----------------------------
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import helpers from "../utils/helpers"


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle: '',
      category: '',
      contentURL: '',
      contentDescription: '',
      openUntil: '',
      isPublic: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleBoardTitle = this.handleBoardTitle.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleContentURL = this.handleContentURL.bind(this);
    this.handleContentDescription = this.handleContentDescription.bind(this);
    this.handleOpenUntil = this.handleOpenUntil.bind(this);
    this.handleIsPublic = this.handleIsPublic.bind(this);
  }

  handleBoardTitle(e) {
    this.setState({ boardTitle: e.target.value }, () => console.log('board name:', this.state.boardTitle));
  }

  handleCategory(e) {
    this.setState({ category: e.target.value }, () => console.log('category:', this.state.category));
  }

    handleContentURL(e) {
    this.setState({ contentURL: e.target.value }, () => console.log('contentURL:', this.state.contentURL));
  }

    handleContentDescription(e) {
    this.setState({ contentDescription: e.target.value }, () => console.log('contentDescription:', this.state.contentDescription));
  }

    handleOpenUntil(e) {
    this.setState({ openUntil: e.target.value }, () => console.log('openUntil:', this.state.openUntil));
  }

    handleIsPublic(e) {
    this.setState({ isPublic: e.target.value }, () => console.log('isPublic:', this.state.isPublic));
  }
  
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      boardTitle: '',
      category: '',
      contentURL: '',
      contentDescription: '',
      openUntil: '',
      isPublic: ''
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const boardSubmit = {
      boardTitle: this.state.boardTitle,
      category: this.state.category,
      contentURL: this.state.contentURL,
      contentDescription: this.state.contentDescription,
      openUntil: this.state.openUntil,
      isPublic: this.state.isPublic     
    };
    helpers.saveBoard(boardSubmit)
      .then((result) => { console.log('new form was created:', boardSubmit) }) ;
  }
  
  render() {
      return (
    <div className="search-container">
    <div className="panel-heading">
    <h3 className="panel-title">Please provide the following information</h3>
    </div>
    <div className="panel-body">
    <form>
    <div className="form-group">
     <center> Board Title:</center><input type="text" className="form-control" value={this.state.boardTitle} onChange={this.handleBoardTitle} />
    </div>
    <div className="form-group">
      <center>Category: </center>
        <select className="form-control" value={this.state.category} onChange={this.handleCategory} >
          <option value="entertainment">Entertainment</option>
          <option value="politics">Politics</option>
          <option value="technology">Technology</option>
          <option value="career">Career</option>
        </select>
    </div>
    <div className="form-group">
     <center> Content URL: </center><input type="text" className="form-control" value={this.state.contentURL} onChange={this.handleContentURL} />
    </div>
    <div className="form-group">
     <center> Content Description: </center><input type="text" className="form-control" value={this.state.contentDescription} onChange={this.handleContentDescription} />
    </div>
    <div className="form-group">
     <center> Open Until: </center><input type="date" className="form-control" value={this.state.openUntil} onChange={this.handleOpenUntil} />
    </div>
    <div className="form-group">
      {/*<form>
        <input type="radio" name="public-private" value="public" checked /> Public
        <input type="radio" name="public-private" value="private" /> Private
      </form> */}
    </div>



    <div className="form-group">
      <button className="btn btn-primary" type="submit" onClick={this.handleFormSubmit}>Submit</button>
      <button className="btn btn-primary" onClick={this.handleClearForm}>Clear</button>
    </div>
    </form>
    </div>

    </div>
  );
}
}


export default FormContainer;