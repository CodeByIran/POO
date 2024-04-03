let music1 = {
    foto:'poco.jpg',
    titulo: 'Surreal',
    artistas: 'Luiza Sonza',
    album: 'Escândalo Íntimo',
    poster: 'surreal.jpeg',
    video: `VkA_kJsqZOo?si=IPVFneQBmplTA1SH`
}

let music2 = {
     titulo: 'sofa, breja e netflix',
     artistas: ' Mac Júlia',
     album: 'single',
     poster: 'sofa breja e netflix.jpeg',
     video: `ncLaAaENRWY`
 }

 let music3 = {
     titulo: 'Samba in Paris',
     artistas: 'Baco Exu do Blues',
     album: 'single',
     poster: 'samba in paris.jpeg',
     video: `4iKtTmnHojU?si=1Cx03Z5gFOq5v-7N`
 }

 let music4 = {
    titulo: 'Deixe Me ir',
     artistas: '1kilo',
     album: 'single',
     poster: 'deixe me ir.jpeg',
     video: `wFXrdtnD4eY`
 }

 let music5 = {
     titulo: 'Vai lá em casa hoje',
     artistas: 'Marília Mendonça',
     album: 'single',
     poster: 'vailaemcasahoje.jpeg',
     video: `UJyr6p3nZRA`
 }

 let music6 = {
     titulo: 'No Lie',
     artistas: 'Dua Lipa',
     album: 'single',
     poster: 'no lie.jpeg',
     video: `166tsC3RUcc`
 }

 let music7 = {
     titulo: 'Intenção',
     artistas: 'Mc Cabelinho',
     album: 'single',
     poster: 'intenção.jpeg',
     video: `atTFe3jIJFo`
 }

 let music8 = {
     titulo: 'Te Assumi Pro Brasil',
     artistas: 'Matheus e Kauan',
     album: 'single',
     poster: 'teassumiprobrasil.jpeg',
     video: `5si1VQICDKI`
 }
 
 let music9 = {
     titulo: 'Reus',
     artistas: 'Felipe ret',
     album: 'single',
     poster: 'reus.jpeg',
     video: `VCZ80bl9hAg`
 }

 let music10 = {
     titulo: 'Corpo sensual',
     artistas: 'Pablo Vitar',
     album: 'Vai passar mal',
     poster: 'corposensual.jpeg',
     video: `0I4f9pakFQ4`
 }

 
console.log(`${music1.titulo} ${music1.artistas} -->  ${music1.poster}`);
console.log(`${music2.titulo} ${music2.artistas} --> ${music2.poster}`);
console.log(`${music3.titulo} ${music3.artistas} --> ${music3.poster}`);
console.log(`${music4.titulo} ${music4.artistas} --> ${music4.poster}`);
console.log(`${music5.titulo} ${music5.artistas} --> ${music5.poster}`);
console.log(`${music6.titulo} ${music6.artistas} --> ${music6.poster}`);
console.log(`${music7.titulo} ${music7.artistas} --> ${music7.poster}`);
console.log(`${music8.titulo} ${music8.artistas} --> ${music8.poster}`);
console.log(`${music9.titulo} ${music9.artistas} --> ${music9.poster}`);
console.log(`${music10.titulo} ${music10.artistas} --> ${music10.poster}`);

let listaDeMusic = [];

listaDeMusic.push(music1);
listaDeMusic.push(music2);
listaDeMusic.push(music3);
listaDeMusic.push(music4);
listaDeMusic.push(music5);
listaDeMusic.push(music6);
listaDeMusic.push(music7);
listaDeMusic.push(music8);
listaDeMusic.push(music9);
listaDeMusic.push(music10);


for(let i = 0; i < listaDeMusic.length; i++){
    console.log(`${listaDeMusic[i].titulo} ${listaDeMusic[i].artistas} --> ${listaDeMusic.poster}`);
}

for (let i = 0; i < listaDeMusic.length; i++) {
    document.write(`
        <div class="card"> 
            <img class="foto" src="imgg/${listaDeMusic[i].poster}">
        <div class="info">
            <span class="titulo">${listaDeMusic[i].titulo}</span>
            <span class="artistas">${listaDeMusic[i].artistas}</span>
            </div>
            <span class="album">${listaDeMusic[i].album}</span>

                <iframe class='video'

        src="https://www.youtube.com/embed/${listaDeMusic[i].video}"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

        </iframe>
        </div>
    `);
}