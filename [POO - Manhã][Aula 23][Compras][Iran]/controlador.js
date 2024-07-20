let inputId = document.getElementById('iptId');
let inputDescricao = document.getElementById('iptDescricao');
let precoUnitario = document.getElementById('ipPtrecoUnitario');
let buttonAdicionar = document.getElementById('btnAdicionar');
let containerCards = document.getElementById('containerCards');

function quandoClicarNoBotao(){
    console.log(inputDescricao.value);
}

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