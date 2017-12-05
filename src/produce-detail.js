import React, { Component } from 'react';

class ProduceDetail extends Component {
  render() {
    const details = this.props.details;
    return (
      <div>
        <h2>This is the produce detail component!</h2>
        <p>{details.item}</p>
        <p>{details.description}</p>
        <a href={`${details.recipeLink}`} target="_blank">{details.recipeName}</a>
      </div>
    )
  }

}

export default ProduceDetail;