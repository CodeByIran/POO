import '../styles/MovieButtons.css'
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
        <span className="info-icon"><MdInfoOutline /></span> 
        <span className="info-text">Mais Informações</span>
      </button>
    </div>
  );
}

export default MovieButtons;

// import React from 'react';
// import '../styles/MovieButtons.css';
// import { MdInfoOutline } from "react-icons/md";
// import { MdOutlinePlayArrow } from "react-icons/md";

// function MovieButtons() {
//   return (
//     <div className="billboard-links button-layer forward-leaning">
//       <a href="/watch/81588906?trackId=251973876&amp;tctx=0%2C0%2Cad7b575e-b9ad-4989-94b0-816f1df80e99-291199989%2CNES_369E96EB140929C80C302EE083A0A5-CF285654F49A39-88C6B80DD2_p_1737931841130%2CNES_369E96EB140929C80C302EE083A0A5_p_1737931841130%2C%2C%2C%2C%2CVideo%3A81588906%2C" 
//          className="playLink isToolkit" 
//          data-uia="play-button" 
//          role="link" 
//          aria-label="Assistir">
//         <button className="color-primary hasLabel hasIcon ltr-podnco" tabindex="-1" type="button">
//           <div className="ltr-1st24vv">
//             <div className="medium ltr-iyulz3" role="presentation">
//               <MdOutlinePlayArrow />
//             </div>
//           </div>
//           <div className="ltr-1npqywr" style={{ width: '1rem' }}></div>
//           <span className="ltr-1vh9doa">Assistir</span>
//         </button>
//       </a>
//       <button className="color-secondary hasLabel hasIcon ltr-18ezbm2" data-uia="billboard-more-info" type="button">
//         <div className="ltr-1st24vv">
//           <div className="medium ltr-iyulz3" role="presentation">
//             <MdInfoOutline />
//           </div>
//         </div>
//         <div className="ltr-1npqywr" style={{ width: '1rem' }}></div>
//         <span className="ltr-1vh9doa">Mais informações</span>
//       </button>
//     </div>
//   );
// }

// export default MovieButtons;