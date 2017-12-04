import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import produceData from './produce.json';
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

  componentDidUpdate() {
    console.log('STATE: ', this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SeasonFilter filterBySeason={this.filterBySeason}/>
        <ProduceList selectedSeason={this.state.season}/>
      </div>
    );
  }
}

export default App;
