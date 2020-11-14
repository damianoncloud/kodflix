import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Aggiunto per prova

export default function Movie(props) {
    return (
      <Link to='./details'>
      <div className="item">
        <img src={props.image} alt={`${props.name} logo`}/>
        <div className="overlay">
          <h1>{props.title}</h1>
        </div>
      </div>
      </Link>
    )
}