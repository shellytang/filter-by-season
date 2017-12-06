import React, { Component } from 'react';
import produceData from '../produce.json';
import './season-filter-menu.css';

class SeasonFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    //create seasons filter options and manually add view all option
    const seasons = produceData.map(item => {
      return item.season;
    }); 
    const uniqueSeasons = seasons.filter((season, index) => {
      return seasons.indexOf(season) === index;
    }).map((filterOption, index) => {
      return (
          <div className="filterItem" key={index} onClick={this.handleClick}>{ filterOption }</div>
      )
    });

    return ( 
      <div className="filterMenuContainer"> 
          { uniqueSeasons }
          <div className="filterItem" onClick={this.handleClick}>View All</div>
      </div>
    )
  }
}

export default SeasonFilter;