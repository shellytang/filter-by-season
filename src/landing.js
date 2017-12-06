import React, { Component } from 'react';
import SeasonFilter from './season-filter-menu';
import ProduceList from './produce-list';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: '',
    };
    this.filterBySeason = this.filterBySeason.bind(this);
  }

  filterBySeason(season) {
    this.setState({
      season, // season: season
    });
  }

  render() {
    return (
      <div>
        <SeasonFilter filterBySeason={this.filterBySeason} />
        <ProduceList selectedSeason={this.state.season} />
      </div>
    );
  }
}

export default Landing;
