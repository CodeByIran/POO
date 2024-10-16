let containerCards = document.getElementById('containerCards');
let iptPreco = document.getElementById('iptPreco');
let btnFiltrar = document.getElementById('btnFiltrar');
let iptTipo = document.getElementById('iptTipo');

 //----------------------------------------------------------------

 desenharCards(containerCards, cardapio);

 //--------------------------------------------------------------

 function quandoClicarEmFiltrar(){

    let listaFiltrada = cardapio.filter(
        (lanche) => (lanche.preco <= iptPreco.value && lanche.tipo == iptTipo.value)
    );
    desenharCards(containerCards, listaFiltrada);

    if (listaFiltrada.length > 0) {
        desenharCards(containerCards, listaFiltrada);
    } else {
        desenharMensagem(containerCards);
        // containerCards.innerHTML = 'Nenhum resultado encontrado para esses Filtros.';
    }

 }

 btnFiltrar.addEventListener('click', quandoClicarEmFiltrar);




 