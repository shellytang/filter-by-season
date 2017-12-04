import React, { Component } from 'react';
import produceData from './produce.json';

class ProduceList extends Component {
  //get list of produce based on selected season and render produce image to component
  render() {

    let produceListBySeason = produceData.filter(item => {
       return item.season === this.props.selectedSeason;
    }).map(produce => {
      return (
        <div><img src={produce.path} alt={produce.item}></img></div>
      )
    });

    return (
      <div>
        <h2>This is the produce list!</h2>
        { produceListBySeason }
      </div>
    )
  }
}

export default ProduceList;