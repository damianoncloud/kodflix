import React from 'react';

export default function Movie(props) {
    return (
      <div className="item">
        <img src={props.image} alt={`${props.name} logo`}/>
        <div className="overlay">
          <h1>{props.title}</h1>
        </div>
      </div>
    )
}