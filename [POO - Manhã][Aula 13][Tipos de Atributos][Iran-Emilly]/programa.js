let clienteB = {
    nome: "cleiton Rasta",
    cpf: "222.222.222-22",
    endereço: {
        rua: "Tal", 
        numero: 10, 
        bairro: "Centro", 
        cidade: "Cajueiro",
        estado: "AL"
}
};
console.log(); //imprimir o objeto completo

let clienteC = {
    nome: "Maria",
    pedidos: [
        {
            totalProdutos: 320,
            frete: 15
        }, 
        {
            totalProdutos: 500,
            frete: 72
        }]     
 }
 console.log(clienteC.pedidos[1].frete); //imprimir os d