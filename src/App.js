import React from 'react'
import bloodDiamond from './Blood-diamonds.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix!</h1>
        <img src={bloodDiamond} alt="Blood Diamonds Movie Cover" />
        <br /><br /><br />
        <div className="container">
          <div className="item"><h2>Blood Diamonds</h2></div>
          <div className="item"><h2>Chocolate</h2></div>
          <div className="item"><h2>Parasite</h2></div>
        </div>
        <div className="container">
          <div className="item"><h2>Titanic</h2></div>
          <div className="item"><h2>Enemy of the State</h2></div>
          <div className="item"><h2>Matrix</h2></div>
        </div>
    </div>
  );
}

export default App;
