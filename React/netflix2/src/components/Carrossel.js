import React from "react";
import MovieCard from "./MovieCard";
import "../styles/Carousel.css";

const Carousel = ({ title, isNumbered }) => {
  const movies = [
    { id: 1, title: "Filme 1", image: "/img/perfil.png" },
    { id: 2, title: "Filme 2", image: "/img/rocky.png" },
    { id: 3, title: "Filme 3", image: "/img/marshall.png" },
    { id: 4, title: "Filme 4", image: "/img/no.png" },
    { id: 5, title: "Filme 5", image: "/img/chase.webp" },
  ];

  return (
    <div className="carousel">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-container">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} number={isNumbered ? index + 1 : null} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
