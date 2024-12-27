import React from "react";
import CardPerfil from "./CardPerfil";
import BotaoVazado from "./BotaoVazado";
import './SelecaoPerfil.css';

const SelecaoPerfil = () => {
  return (
    <div className="selecao-perfil">
      <h2>Quem está assistindo?</h2>
      <div className="cards-container">{
        <>
        <CardPerfil />
        <CardPerfil />
        <CardPerfil />
        <CardPerfil />
        <CardPerfil />
        </>
      }
      </div>
      <BotaoVazado texto="Continuar" />
    </div>
  );
};

export default SelecaoPerfil;


// {[...Array(5)].map((_, index) => (
//     <CardPerfil key={index} />
//   ))}