import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Carousel title="Populares na Netflix" />
      <Carousel title="Séries em Alta" />
      <Carousel title="Filmes Recomendados" />
      <Carousel title="Top 10 da Semana" isNumbered={true} />
    </div>
  );
};

export default Home;
