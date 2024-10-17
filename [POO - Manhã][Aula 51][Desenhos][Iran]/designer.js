function desenharCards(tagContainer, lista) {
    tagContainer.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
     tagContainer.innerHTML += `
            <div class='card'>
            <img src='img/${lista[i].poster}' class='foto'>
                <span class='text'>Titulo: ${lista[i].titulo}</span>
                <span class='text'>Autor: ${lista[i].autor}</span>
                <span class='text'>Genero: ${lista[i].genero}</span>
                <span class='text'>Temporada: ${lista[i].temporadas}</span>
                <span class='text'>Ano de Lançamento: ${lista[i].anoDeLancamento}</span>
         </card>
        `;
    
    }
}

function desenharMensagem(tagContainer) {
    tagContainer.innerHTML = `Nenhum resultado encontrado para esses filtros.`;
}