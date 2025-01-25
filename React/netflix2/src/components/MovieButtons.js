import React from 'react';
import { MdInfoOutline } from "react-icons/md";
import { MdOutlinePlayArrow } from "react-icons/md";

function MovieButtons() {
  return (
    <div className="movie-buttons">
      <button className="watch-button">
        <span className="play-icon"><MdOutlinePlayArrow /></span> Assistir
      </button>
      <button className="info-button">
        <span className="info-icon"><MdInfoOutline /></span> Mais informações
      </button>
    </div>
  );
}

export default MovieButtons;