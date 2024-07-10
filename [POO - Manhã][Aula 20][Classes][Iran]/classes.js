class ContaDeEnergia {
    constructor(nomeDoTitular, numeroDaConta, dataDeVencimento, consumoEmKwh, valorAPagar) {
      this.nomeDoTitular = nomeDoTitular;
      this.numeroDaConta = numeroDaConta;
      this.dataDeVencimento = dataDeVencimento;
      this.consumoEmKwh = consumoEmKwh;
      this.valorAPagar = valorAPagar;
      this.consumoEmKwh * valorAPagar
     
    }

    // calcularValorAPagar() {
        // return this.consumoEmKwh * this.valorAPagar;
    //   }
  }

  class ContaDeAgua {
    constructor(nomeDoTitular, numeroDaConta, dataDeVencimento, consumoEmM3, valorM3, valorAPagar) {
      this.nomeDoTitular = nomeDoTitular;
      this.numeroDaConta = numeroDaConta;
      this.dataDeVencimento = dataDeVencimento;
      this.consumoEmM3 = consumoEmM3;
      this.valorM3 = valorM3;
      this.valorAPagar = valorAPagar;
      this.consumoEmM3 * valorAPagar;

    }

    // calcularValorAPagar() {
        // return this.consumoEmM3 * this.tarifaPorM3;
    //   }
    }
  

  

