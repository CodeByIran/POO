let inputNome = document.getElementById('iptNome');
let inputEstado = document.getElementById('iptEstado');
let inputAno = document.getElementById('iptAno');
let inputEscudo = document.getElementById('iptEscudo');
let btnCadastrar = document.getElementById('btnCadastra');

//1° = pegar o div onde será desenhado os e colocar em uma variável
let divContainerCards = document.getElementById('containerCards');
//2° = Chamar a funcão desenharCards passando como entrada:
// a variavel que está armazenando o div
// e o array de objetos

function cadastrar(){
    let timeTemp = {
        name: inputNome.value,
        estadoDeOrigem: inputEstado.value,
        anoDaFundacao: inputAno.value,
        fotoEscudo: inputEscudo.files[0].name
    }

    times.push(timeTemp);

    desenharCards(divContainerCards, times);
}
btnCadastrar.addEventListener('click', cadastrar);

desenharCards(divContainerCards, times)
