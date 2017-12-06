import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from '../veggie.png';
import './app.css';

import Landing from '../landing-container/landing';
import About from '../about/about';

class App extends Component {
 
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <header className="appHeader">
            <img src={logo} className="appLogo" alt="logo" />
            <h1 className="appTitle">Seasonal Produce Guide</h1>
          </header>
          <div className="siteContent">
            <Switch> 
              <Route exact path='/about' component={About}/>
              <Route path='/' component={Landing} />
            </Switch>
          </div>
          <footer>
            <Link to='/about' className='aboutLink'>Veggies & Fruits - Resources</Link>
            <a href='https://github.com/shellytang/filter-by-season' target='_blank' rel="noopener noreferrer" className="ghLink">View in Github</a>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
