//"Pegando" elementos do html e colocando em variáveis

let inputId = document.getElementById('iptId');
let inputDescricao = document.getElementById('iptDescricao');
let precoUnitario = document.getElementById('ipPtrecoUnitario');
let buttonAdicionar = document.getElementById('btnAdicionar');
let containerCards = document.getElementById('containerCards');

//Criando o objeto carrinhoDeCompras
let carrinhoDeCompras = new CarrinhoDeCompras();

//Função que será chamada quando o botão Adicionar for clicado:
function quandoClicarNoBotao(){
    // console.log(inputDescricao.value);

    //Criação de um objeto da classe Produto
    //o constructor está pegando valores dos inputs
    let produtoTemporario = new Produto(
        inputId.value,
         '',
        inputDescricao.value,
        precoUnitario.value
     );
    
     //Adicionando o produtoTemporario ao carrinhoDeCompras
    carrinhoDeCompras.adicionarProduto(produtoTemporario);
    console.log(carrinhoDeCompras);
}

//Adicionando um "fofoqueiro" ao botão Adicionar.
//Sempre que o botão for clicado o 
//fofoqueiro irá chamar a função quandoClicarNoBotao
buttonAdicionar.addEventListener('click', quandoClicarNoBotao);


//Criação dos objetos
const produto1 = new Produto(1, 'foto1.jpg', 'Descrição do produto 1', 10.50);
const produto2 = new Produto(2, 'foto2.jpg', 'Descrição do produto 2', 20.00);

// Criando um objeto da classe CarrinhoDeCompras
const carrinho = new CarrinhoDeCompras();

// Adicionando os dois produtos ao carrinho usando o método adicionarProduto
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

console.log(carrinho);