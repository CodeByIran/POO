// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import SelecaoPerfil from './components/SelecaoPerfil';
import NavBar from './components/NavBar';
import MenuLateral from './components/MenuLateral';
import reportWebVitals from './reportWebVitals';


import chase from './img/chase.webp';
import marshall from './img/marshall.png';
import rocky from './img/rocky.png';
import skye from './img/skye.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
// -------------------------------
const usuario1 = {nome: 'Alexsander', foto: chase }
const usuario2 = {nome: 'José', foto: marshall }
const usuario3 = {nome: 'João', foto: rocky }
const usuario4 = {nome: 'Maria', foto: skye }

const usuarios = [usuario1, usuario2, usuario3, usuario4];
// -------------------------------

root.render(
  <React.StrictMode>
    <NavBar />
    <MenuLateral/>
    <SelecaoPerfil listaDeUsuarios={usuarios} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();