/* Criem o componente Config */
/* Ele será a nossa página de Configuração do Netflix */
//Por enquanto, essa página só terá o menu lateral
import React from 'react';
import './Config.css'
import MenuLateral from '../components/MenuLateral';

function Config() {
  return (
    <div>
      <MenuLateral />
    </div>
  );
}

export default Config;

// agora eu queria usar o config.js para poder linkar uma outra aba e fazer a tela de accont da netlix! e adicionar o icon de conta na navbar na lateral direita, já tenho o menu lateral pra usar na outra aba só terminar de estilizar e deixar igual a aba de accont da netlix
