const contaDeEnergia1 = new ContaDeEnergia('João Silva', '12345678', '2024-07-15', 350, 200.00);
// const contaDeEnergia2 = new ContaDeEnergia('Maria Souza', '87654321', '2024-07-20', 450, 250.00);
// const contaDeEnergia3 = new ContaDeEnergia('Carlos Pereira', '11223344', '2024-07-25', 550, 300.00);

console.log(`Conta 1 - Nome: ${contaDeEnergia1.nomeDoTitular}, Consumo: ${contaDeEnergia1.consumoEmKwh} kWh, Valor: R$ ${contaDeEnergia1.valorAPagar}`);
// console.log(`Conta 2 - Nome: ${contaDeEnergia2.nomeDoTitular}, Consumo: ${contaDeEnergia2.consumoEmKwh} kWh, Valor: R$ ${contaDeEnergia2.valorAPagar}`);
// console.log(`Conta 3 - Nome: ${contaDeEnergia3.nomeDoTitular}, Consumo: ${contaDeEnergia3.consumoEmKwh} kWh, Valor: R$ ${contaDeEnergia3.valorAPagar}`);

const contaDeAgua1 = new ContaDeAgua('João Silva', '12345678', '2024-07-15', 20, 100.00);
// const contaDeAgua2 = new ContaDeAgua('Maria Souza', '87654321', '2024-07-20', 25, 125.00);
// const contaDeAgua3 = new ContaDeAgua('Carlos Pereira', '11223344', '2024-07-25', 30, 150.00);

console.log(`Conta de Água 1 - Nome: ${contaDeAgua1.nomeDoTitular}, Consumo: ${contaDeAgua1.consumoEmM3} m³, Valor: R$ ${contaDeAgua1.valorAPagar}`);
// console.log(`Conta de Água 2 - Nome: ${contaDeAgua2.nomeDoTitular}, Consumo: ${contaDeAgua2.consumoEmM3} m³, Valor: R$ ${contaDeAgua2.valorAPagar}`);
// console.log(`Conta de Água 3 - Nome: ${contaDeAgua3.nomeDoTitular}, Consumo: ${contaDeAgua3.consumoEmM3} m³, Valor: R$ ${contaDeAgua3.valorAPagar}`);

if(contaDeEnergia1 instanceof ContaDeAgua){
    console.log('É uma conta de água');
} else{
    console.log('Não é uma conta de água');
}

if(contaDeAgua1 instanceof ContaDeAgua){
    console.log('É uma conta de água');
} else{
    console.log('Não é uma conta de água');
}