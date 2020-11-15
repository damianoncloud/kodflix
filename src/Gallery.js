import React from 'react';
import Movie from './Movie.js';
import getGallery from './gallery-get.js';


export default function Gallery() {
    return (
      <div>
        <h1>Welcome to Kodflix</h1>
        <div className="container">
          {
            getGallery().map(movie => (
              <Movie 
                key={movie.id} 
                id={movie.id} 
                title={movie.title} 
                image={movie.image}/>
            ))
          }
        </div>
      </div>
    )
}

