import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './veggie.png';
import './App.css';

import SeasonFilter from './season-filter-menu';
import ProduceList from './produce-list';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: '',
    };
    this.filterBySeason = this.filterBySeason.bind(this);
  }

  filterBySeason(season) {
    this.setState({
      season,
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <header className="appHeader">
            <img src={logo} className="appLogo" alt="logo" />
            <h1 className="appTitle">Seasonal Produce Guide</h1>
          </header>
           <SeasonFilter filterBySeason={this.filterBySeason}/>
           <ProduceList selectedSeason={this.state.season}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
