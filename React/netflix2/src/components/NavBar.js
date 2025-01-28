import React from 'react';
import '../styles/NavBar.css';
import logo from '../img/netflix-logo-transparente.png';

// import { MdCreditCard } from "react-icons/md";

function NavBar() {
    return (
        <nav className='nav-bar'>
            <div className="nav-left">
                <img className='logotipo' src={logo} alt="Netflix Logo" />
                {/* <MdCreditCard className="icon" /> */}
            </div>
            <div className="nav-links">
                <button className='link selecionado'>Início</button>
                <button className='link'>Séries</button>
                <button className='link'>Filmes</button>
                <button className='link'>Bombando</button>
                <button className='link'>Minha lista</button>
                <button className='link'>Navegar por idiomas</button>
            </div>
        </nav>
    );
}

export default NavBar;