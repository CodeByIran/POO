import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img className="hero-logo" src="/img/netflix-logo-transparent.png" alt="Netflix Logo" />
        <h1 className="hero-title">Nome da Série</h1>
        <p className="hero-info">Classificação: 16+ | Suspense | 1 Temporada</p>
        <div className="hero-buttons">
          <button className="play-button">▶ Assistir</button>
          <button className="info-button">ℹ Mais Informações</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
