class Produto {
    constructor(id, foto, descricao, precoUnitario) {
        this.id = id;
        this.foto = foto;
        this.descricao = descricao;
        this.precoUnitario = Number(precoUnitario);
    }
}

// Ex de como criar uma instância da classe Produto
// const produto1 = new Produto(1, 'foto1.jpg', 'Descrição do produto 1', 10.50);
// console.log(produto1);

class CarrinhoDeCompras {
    constructor() {
        this.data = new Date();
        this.listaDeProdutos = [];
    }

    adicionarProduto(produto) {
        if (produto instanceof Produto) {
            this.listaDeProdutos.push(produto);
        } else {
            console.error('Só é possível adicionar objetos da classe Produto');
        }
    }
    calcularTotal(){
        let total = 0;
        for (let i = 0; i < this.listaDeProdutos.length; i++) {
            total += this.listaDeProdutos[i].precoUnitario;    
        }
                return total;
    }

}


// const carrinho = new CarrinhoDeCompras();
// console.log(carrinho);

// const produto1 = new Produto(1, 'foto1.jpg', 'Descrição do produto 1', 10.50);
// carrinho.listaDeProdutos.push(produto1);
// console.log(carrinho);


// // Ex de como tentar adicionar um objeto que não é da classe Produto
// const produtoInvalido = { id: 2, foto: 'foto2.jpg', descricao: 'Descrição do produto 2', precoUnitario: 20.00 };
// carrinho.adicionarProduto(produtoInvalido); // Isso deve exibir a mensagem de erro no console
