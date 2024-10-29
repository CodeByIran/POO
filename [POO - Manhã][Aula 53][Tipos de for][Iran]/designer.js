function desenharCards(tagContainer, lista){
    tagContainer.innerHTML = '';

    for (const time of lista) {
        tagContainer.innerHTML += `
            <div class='card'>
                <img class='escudo' src='${time.fotoEscudo}'>
                <span class'titulo'>${time.name}</span>
                <span class'texto'>${time.estadoDeOrigem}</span>
                <span class'texto'>${time.anoDaFundacao}</span>
            </div>
        `;
    }

}