import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin(); //for material-ui setup

ReactDOM.render(
  <BrowserRouter>
    < App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
