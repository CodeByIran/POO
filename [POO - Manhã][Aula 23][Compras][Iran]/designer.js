function desenharCarrinhoDeCompras(carrinho, containerHTML, totalHTML){
//    containerHTML.innerHTML = ('Teste da função desenharCarrinhoDeCompras');
    containerHTML.innerHTML = '';
   for(let i=0; i < carrinho.listaDeProdutos.length; i++){
    containerHTML.innerHTML +=
    `<div class='card'>
        <span>${carrinho.listaDeProdutos[i].id}</span>
        <span>${carrinho.listaDeProdutos[i].descricao}</span>
        <span>Marca: ${carrinho.listaDeProdutos[i].marca}</span>
        <span>R$ ${carrinho.listaDeProdutos[i].precoUnitario}</span>
    </div>
    `;

    }

   totalHTML.innerHTML = `Preço Total: R$${carrinhoDeCompras.calcularTotal()}`
}