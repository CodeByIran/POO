import React from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ movie, number }) => {
  return (
    <div className="movie-card">
      {number && <span className="movie-number">{number}</span>}
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <p className="movie-title">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
