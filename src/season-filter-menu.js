import React, { Component } from 'react';
import produceData from './produce.json';

class SeasonFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    let seasons = produceData.map(item => {
      return item.season;
    });
    let uniqueSeasons = seasons.filter((season, index) => {
      return seasons.indexOf(season) === index;
    }).map((filterOption, index) => {
      return (
        <div key={index}>{filterOption}</div>
      )
    });

    return (
      <div>
        <h2>This is the Season Filter</h2>
        { uniqueSeasons }
      </div>
    )
  }
}

export default SeasonFilter;