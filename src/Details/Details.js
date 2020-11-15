import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery-get.js';
import './Details.css';
export default class Details extends React.Component {
    
    constructor() {
        super();
        this.state = { 
            gallery: {}
        }
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let gallery = getGallery()
            .find((gallery) => gallery.id === movieId);
        this.setState({
            gallery: gallery
        });

    }

    render() {
        if(this.state.gallery === undefined) {
            return <Redirect to='/not-found' />;
            }
            else {
                return(
                    <div className="Details">
                        <h1>{this.state.gallery.title}</h1>
                        <div className="container">
                            <div>{this.state.gallery.details}</div>
                            <img 
                                src={this.state.gallery.image} 
                                alt={this.state.gallery.title} />
                        </div>
                        <Link to='/'>Back to home page</Link>  
                    </div>
                );
        }        
    }
}