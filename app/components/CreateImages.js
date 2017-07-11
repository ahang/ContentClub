// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

// ----------------------------
// Static Bars
// ----------------------------

// import Image from './Image.jsx';
// import data from '../../data.json';

let CreateImages = React.createClass({
  generateImage: (image) => {
    return <Image source={image} key={image} />;
  },

  generateImages: (images) => {
    return images.map(this.generateImage);
  },

  render: () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">

            {this.generateImages(data.images)}

          </div>
        </div>
      </div>
    );
  }
});

export default CreateImages;