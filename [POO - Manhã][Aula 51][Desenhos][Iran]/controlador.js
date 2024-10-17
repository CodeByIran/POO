let container = document.getElementById('containerCards');
let form = document.getElementById('filter-form');
let tituloFiltro = document.getElementById('titulo').value.toLowerCase();
let autorFiltro = document.getElementById('autor').value.toLowerCase();
let generoFiltro = document.getElementById('genero').value.toLowerCase();
let anoDeLancamentoFiltro = document.getElementById('anoDeLancamento').value;

desenharCards(containerCards, lista);

function filtrarDesenhos(event) {
    event.preventDefault();

    let listaFiltrada = lista.filter(
        (desenho) => (
            desenho.titulo == titulo.value ||
            desenho.autor == autor.value || 
            desenho.genero == genero.value|| 
            desenho.anoDeLancamento == anoDeLancamento.value
        )
);
    desenharCards(containerCards, listaFiltrada);


    if (listaFiltrada.length > 0) {
        desenharCards(listaFiltrada);
    } else {
        desenharMensagem(container);
    }
}

btnFiltrar.addEventListener('click', filtrarDesenhos);

// form.addEventListener('submit', filtrarDesenhos);
// exibirDesenhos(desenhos); 