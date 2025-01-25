import './Profiles.css'
import SelecaoPerfil from '../components/SelecaoPerfil';

import chase from '../img/chase.webp';
import marshall from '../img/marshall.png';
import rocky from '../img/rocky.png';
import skye from '../img/skye.jpg';

function Profiles (){
    // -----------------------------------
    const usuario1 = {nome: 'Alexsander', foto: chase }
    const usuario2 = {nome: 'José', foto: marshall }
    const usuario3 = {nome: 'João', foto: rocky }
    const usuario4 = {nome: 'Maria', foto: skye }
    const usuarios = [usuario1, usuario2, usuario3, usuario4];
    // -----------------------------------

    return(
        <SelecaoPerfil listaDeUsuarios={usuarios}/>
    );
}
export default Profiles;

