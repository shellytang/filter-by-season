import React, { Component } from 'react';
import produceData from './produce.json';

class SeasonFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    let selectedSeason = e.currentTarget.textContent;
    if(selectedSeason === 'View All') {
      selectedSeason = '';
    }
    this.props.filterBySeason(selectedSeason);
  }

  render() {
    let seasons = produceData.map(item => {
      return item.season;
    });
    let uniqueSeasons = seasons.filter((season, index) => {
      return seasons.indexOf(season) === index;
    }).map((filterOption, index) => {
      return (
        <div key={index} onClick={this.handleClick}>{filterOption}</div>
      )
    });

    return (
      <div>
        <h2>This is the Season Filter</h2>
        { uniqueSeasons }
        <div onClick={this.handleClick}>View All</div>
      </div>
    )
  }
}

export default SeasonFilter;