import React, { Component } from 'react';

class ProduceDetail extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
    this.hideDetails = this.hideDetails.bind(this);
  }

  hideDetails(e) {
    e.preventDefault();
    this.props.toggleDetails();
  }

  render() {
    const details = this.props.details;
    return (
      <div onClick={this.hideDetails}>
        <h2>This is the produce detail component!</h2>
        <p>{details.item}</p>
        <p>{details.description}</p>
        <a href={`${details.recipeLink}`} target="_blank">{details.recipeName}</a>
      </div>
    )
  }

}

export default ProduceDetail;