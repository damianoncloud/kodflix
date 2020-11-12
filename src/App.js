import React from 'react';
import bloodDiamond from './images/blood-diamonds-cover.jpg';
import chocolate from './images/chocolate-cover.jpg';
import parasite from './images/parasite-cover.jpg';
import titanic from './images/titanic-cover.jpg';
import enemyofstate from './images/enemy-state-cover.jpg';
import matrix from './images/matrix-cover.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix!</h1>
        <br /><br /><br />
        <div className="container">
          <div className="item">
            <img src={bloodDiamond} alt="Blood Diamonds cover"/>
          </div>
          <div className="item">
            <img src={chocolate} alt="Chocolate cover"/>
          </div>
          <div className="item">
            <img src={parasite} alt="Parasite cover"/>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img src={titanic} alt="Titanic cover"/>
          </div>
          <div className="item">
            <img src={enemyofstate} alt="Enemy of State Cover"/>
          </div>
          <div className="item">
            <img src={matrix} alt="Matrix cover"/>
          </div>
        </div>
    </div>
  );
}

export default App;
