import './CardPerfil.css';
import perfil from './perfil.png'

function CardPerfil({usuario}){
  return (
    <div className="card-perfil">
        <img className="foto" src={usuario.foto}/>
        <span className='nome'>{usuario.nome}</span>
    </div>
  );
}
export default CardPerfil;

