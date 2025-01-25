import React from "react";
import MovieCard from "./MovieCard";
import "../styles/Carousel.css";

const movies = {
  popular: ["/img/rocky.png", "/img/ruble.png", "/img/skye.jpg"],
  top10: ["/img/chase.webp", "/img/marshall.png", "/img/perfil.png"],
  action: ["/img/no.png", "/img/rocky.png", "/img/perfil.png"],
};

const Carousel = ({ title, category }) => {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-container">
        {movies[category].map((movie, index) => (
          <MovieCard key={index} image={movie} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
