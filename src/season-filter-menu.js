import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
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

    const style = {
      display: 'inline-block',
      margin: '16px 32px 16px 0',
    }
    
    const seasons = produceData.map(item => {
      return item.season;
    });
    const uniqueSeasons = seasons.filter((season, index) => {
      return seasons.indexOf(season) === index;
    }).map((filterOption, index) => {
      // return (
      //   <div key={index} onClick={this.handleClick}>{filterOption}</div>
      // )
      return (
        <Menu>
          <MenuItem key={index} onClick={this.handleClick} primaryText={filterOption} />
        </Menu>
      )
    });

    return (
      <div>
        <h2>This is the Season Filter</h2>
        <Paper style={style}>
          { uniqueSeasons }
          <MenuItem onClick={this.handleClick} primaryText="View All" />
        </Paper>
      </div>
    )
  }
}

export default SeasonFilter;