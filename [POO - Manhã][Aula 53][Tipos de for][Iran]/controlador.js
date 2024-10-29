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

// ------------------------------------------------
// codigo para carregar a imagem do input file.

let srcImagem;

function quandoCarregarArquivo() {
    const fileReader = new FileReader();
    const arquivos = iptEscudo.files;

    if(arquivos){ // verificando se arquivos não está vazio
        fileReader.onload = function (event) {
            srcImagem = event.target.result;
        }
        fileReader.readAsDataURL(arquivos[0]);
    }
}

iptEscudo.addEventListener('change', quandoCarregarArquivo);
// ------------------------------------------------

function cadastrar(){
    let timeTemp = {
        name: iptNome.value,
        estadoDeOrigem: iptEstado.value,
        anoDaFundacao: iptAno.value,
        fotoEscudo: srcImagem
    }

    times.push(timeTemp);

    desenharCards(divContainerCards, times);
}
btnCadastrar.addEventListener('click', cadastrar);


