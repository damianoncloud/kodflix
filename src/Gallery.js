import React from 'react';
import Movie from './Movie.js';
import bloodDiamond from './images/blood-diamonds.jpg';
import chocolate from './images/chocolate.jpg';
import parasite from './images/parasite.jpg';
import astarisborn from './images/a-star-is-born.jpg';
import notime from './images/no-time-to-die.jpg';
import theoryofeverything from './images/theory-of-everything.jpg';
import matrix from './images/matrix-cover.jpg';


export default function Gallery() {
    return (
      <div>
        <h1>Welcome to Kodflix</h1>
        <div className="container">
          <Movie title="Blood Diamonds" image={bloodDiamond} />  
          <Movie title="Chocolate" image={chocolate} />  
          <Movie title="A Star is Born" image={astarisborn} />  
          <Movie title="Parasite" image={parasite} />  
        </div>
        <div className="container">
          <Movie title="No time to Die" image={notime} />  
          <Movie title="The Theory of Everything" image={theoryofeverything} />  
          <Movie title="Matrix" image={matrix} />   
        </div>
        <div className="container">
          <Movie title="Blood Diamonds" image={bloodDiamond} />  
          <Movie title="Chocolate" image={chocolate} />  
          <Movie title="A Star is Born" image={astarisborn} />  
          <Movie title="Parasite" image={parasite} />  
        </div>
      </div>
    )
}