import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery.js';
import Details from './Details/Details.js';
import NotFound from './NotFound.js';
// import { render } from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:movieId' component={Details} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App; 