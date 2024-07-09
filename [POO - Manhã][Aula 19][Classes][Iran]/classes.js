class Conta {
    constructor(nomeDoTitular, agencia, numero, saldo) {
      this.nomeDoTitular = nomeDoTitular;
      this.agencia = agencia;
      this.numero = numero;
      this.saldo = saldo;
    }

    exibirDados(){
        console.log(`Nome: ${this.nomeDoTitular} -> R$ ${this.saldo} `);
    }

  }
