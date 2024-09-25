import React from 'react';
import './Card.css';

const Card = ({ movie }) => {
    return (
        <div className="card">
            <img src={movie.img} alt={movie.title} />
            <div className="card-content">
                <h3>{movie.title}</h3>
                <p>{movie.rating}</p>
            </div>
        </div>
    );
};

export default Card;

