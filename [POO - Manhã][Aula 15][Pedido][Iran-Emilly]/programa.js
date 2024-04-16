let pedido = {
    numero: 108,
    cliente:{
        nome: 'Fulano da Silva',
        cpf: '000.000.000-00',
        endereco: 'Rua das Árvores, n° 1'
    },
    produto: [
        {
            descricao: 'Capacete',
            precoUnitario: 500,
            quantidade: 1
        },
        {
            descricao: 'Cotoveleira',
            precoUnitario: 85,
            quantidade: 2
        }
    ]
}

document.write(`
    <div>PEDIDO</div>
    <div>Número do pedido: ${pedido.numero}</div>
    <div>Cliente: ${pedido.cliente.nome}</div>
    <div>CPF: ${pedido.cliente.cpf}</div>
    <div>Endereço de entrega: ${pedido.cliente.endereco}</div>
    <hr>
`)

/*
for(let i = 0; i < pedido.produto.length; i++){
    document.write(`
        <div>Produto: ${pedido.produto[i].descricao}</div>
        <div>Preço unitário: ${pedido.produto[i].precoUnitario}</div>

        <div>Quantidade: ${pedido.produto[i].quantidade}</div>
        <div>Total: ${pedido.produto[i].precoUnitario * pedido.produto[i].quantidade}</div>
         <hr>
    `)
}*/