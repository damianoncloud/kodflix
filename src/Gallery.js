import React from 'react';
import Movie from './Movie.js';
import bloodDiamond from './images/blood-diamonds-cover.jpg';
import chocolate from './images/chocolate-cover.jpg';
import parasite from './images/parasite-cover.jpg';
import titanic from './images/titanic-cover.jpg';
import enemyofstate from './images/enemy-state-cover.jpg';
import matrix from './images/matrix-cover.jpg';


export default function Gallery() {
    return (
      <div>
        <div className="container">
          <Movie title="Blood Diamonds" image={bloodDiamond} />  
          <Movie title="Chocolate" image={chocolate} />  
          <Movie title="Parasite" image={parasite} />  
        </div>
        <div className="container">
          <Movie title="Titanic" image={titanic} />  
          <Movie title="Enemy of State" image={enemyofstate} />  
          <Movie title="Matrix" image={matrix} />  
        </div>
      </div>
    )
}