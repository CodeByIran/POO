let music1 = {
    foto:'poco.jpg',
    titulo: 'surreal',
    artistas: 'Luiza Sonza',
    album: 'Escândalo Íntimo',
    poster: 'surreal.jpeg',
}

let music2 = {
     titulo: 'sofa, breja e netflix',
     artistas: ' Mac Júlia',
     album: 'single',
     poster: 'sofa breja e netflix.jpeg',
 }

 let music3 = {
     titulo: 'Samba in Paris',
     artistas: 'Baco Exu do Blues',
     album: 'single',
     poster: 'samba in paris.jpeg',
 }

 let music4 = {
    titulo: 'Deixe Me ir',
     artistas: '1kilo',
     album: 'single',
     poster: 'deixe me ir.jpeg',
 }

 let music5 = {
     titulo: 'Vai lá em casa hoje',
     artistas: 'Marília Mendonça',
     album: 'single',
     poster: 'vailaemcasahoje.jpeg',
 }

 let music6 = {
     titulo: 'No Lie',
     artistas: 'Dua Lipa',
     album: 'single',
     poster: 'no lie.jpeg',
 }

 let music7 = {
     titulo: 'Intenção',
     artistas: 'Mc Cabelinho',
     album: 'single',
     poster: 'intenção.jpeg',
 }

 let music8 = {
     titulo: 'Te Assumi Pro Brasil',
     artistas: 'Matheus e Kauan',
     album: 'single',
     poster: 'teassumiprobrasil.jpeg',
 }
 
 let music9 = {
     titulo: 'Reus',
     artistas: 'Felipe ret',
     album: 'single',
     poster: 'reus.jpeg',
 }

 let music10 = {
     titulo: 'Corpo sensual',
     artistas: 'Pablo Vitar',
     album: 'Vai passar mal',
     poster: 'corposensual.jpeg',
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
        </div>
    `);
}