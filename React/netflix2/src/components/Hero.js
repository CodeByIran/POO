import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src="/img/no.png" alt="Banner" className="hero-image" />
      <div className="hero-content">
        <h1>Nome da Série</h1>
        <p>Descrição curta da série em destaque.</p>
        <div className="hero-buttons">
          <button className="watch-button">▶ Assistir</button>
          <button className="info-button">ℹ Mais informações</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
