import React from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt="Filme" className="movie-image" />
    </div>
  );
};

export default MovieCard;
