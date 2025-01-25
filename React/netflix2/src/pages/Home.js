// src/pages/Home.js
import React from "react";
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Hero />
      <Carousel title="Populares na Netflix" category="popular" />
      <Carousel title="Top 10 no Brasil" category="top10" />
      <Carousel title="Séries de Ação" category="action" />
    </div>
  );
};

export default Home;
