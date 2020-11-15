import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './gallery-get.js';

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
                    <div>
                    <h1>{this.state.gallery.title}</h1>
                    <Link to='/'>Back to home page</Link>  
                    </div>
                );
        }        
    }
}