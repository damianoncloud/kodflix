import React, { Component } from 'react';
import Gallery from './Gallery.js';
// import { render } from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Kodflix!</h1>
          <br /><br /><br />
          <Gallery />
      </div>
    );
  }
}

export default App;
