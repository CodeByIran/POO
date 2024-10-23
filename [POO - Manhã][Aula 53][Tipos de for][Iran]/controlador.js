let iptNome = document.getElementById('iptNome');
let iptEstado = document.getElementById('iptEstado');
let iptAno = document.getElementById('iptAno');
let iptEscudo = document.getElementById('iptEscudo');
let btnCadastrar = document.getElementById('btnCadastrar');

//1° = pegar o div onde será desenhado os e colocar em uma variável
let divContainerCards = document.getElementById('containerCards');
//2° = Chamar a funcão desenharCards passando como entrada:
// a variavel que está armazenando o div
// e o array de objetos

desenharCards(divContainerCards, times);

function cadastrar(){
    let timeTemp = {
        name: iptNome.value,
        estadoDeOrigem: iptEstado.value,
        anoDaFundacao: iptAno.value,
        fotoEscudo: iptEscudo.value
    }

    times.push(timeTemp);

    desenharCards(divContainerCards, times);
}
btnCadastrar.addEventListener('click', cadastrar);


