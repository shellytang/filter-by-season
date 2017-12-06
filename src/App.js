import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './veggie.png';
import './App.css';

import Landing from './landing';
import SeasonFilter from './season-filter-menu';
import ProduceList from './produce-list';
import About from './about';

class App extends Component {
  // <Route path='/' render={(props) => (<SeasonFilter {...props} filterBySeason={this.filterBySeason} />)} />
  // <Route path='/' render={(props) => (<ProduceList {...props } selectedSeason={this.state.season} />)} />
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <header className="appHeader">
            <img src={logo} className="appLogo" alt="logo" />
            <h1 className="appTitle">Seasonal Produce Guide</h1>
          </header>
          <BrowserRouter>
            <Switch> 
              <Route exact path='/about' component={About}/>
              <Route path='/' component={Landing} />
            </Switch>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
