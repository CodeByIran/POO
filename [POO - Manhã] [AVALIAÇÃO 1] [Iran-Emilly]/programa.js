let serie1 = {
    poster: 'the.jpeg',
    nome: "The Walking Dead",
    atorPrincipal: {
        nome: "Daryl Dixon",
        nascimento: '06/01/1969',
        nacionalidade: "EUA",
    },
    temporada: 11,
    anoDeLancamento: 2010,
}

let serie2 = {
    poster: 'outer.jpeg',
    nome: "Outer Banks",
    atorPrincipal: {
        nome: "John B",
        nascimento: '16/09/1992',
        nacionalidade: "USA",
    },
    temporada: 3,
    anoDeLancamento: 2020,
}

let serie3 = {
    poster: 'flash.jpeg',
    nome: "The Flash",
    atorPrincipal: {
        nome: "Berry Alen",
        nascimento: '14/01/1990',
        nacionalidade: "EUA",
    },
    temporada: 9,
    anoDeLancamento: 2014,
}

let serie4 = {
    poster: 'onmy.jpeg',
    nome: "On My Block",
    atorPrincipal: {
        nome: "Monse Finnie",
        nascimento: '08/09/1998',
        nacionalidade: "EUA",
    },
    temporada: 4,
    anoDeLancamento: 2018,
}

let serie5 = {
    poster: 'arrow.jpeg',
    nome: "Arrow",
    atorPrincipal: {
        nome: "Arqueiro Verde",
        nascimento: '08/04/1981',
        nacionalidade: "Canadá",
    },
    temporada: 8,
    anoDeLancamento: 2012,
}

let serie6 = {
    poster: 'elite.jpeg',
    nome: "Elite",
    atorPrincipal: {
        nome: "Carla Roson",
        nascimento: '26/01/2000',
        nacionalidade: "Espanha",
    },
    temporada: 7,
    anoDeLancamento: 2018,
}

let serie7 = {
    poster: 'onepiece.jpeg',
    nome: "One Piece",
    atorPrincipal: {
        nome: "Nami",
        nascimento: '24/02/1993',
        nacionalidade: "EUA",
    },
    temporada: 1,
    anoDeLancamento: 2023,
}

let serie8 = {
    poster: 'loki.jpeg',
    nome: "Loki",
    atorPrincipal: {
        nome: "Loki",
        nascimento: '08/01/1981',
        nacionalidade: "Reino Unido",
    },
    temporada: 10,
    anoDeLancamento: 100,
}

let serie9 = {
    poster: 'stranger.jpeg',
    nome: "Stranger Things",
    atorPrincipal: {
        nome: "Eleven",
        nascimento: '19/02/2004',
        nacionalidade: "Espanha",
    },
    temporada: 4,
    anoDeLancamento: 2016,
}

let serie10 = {
    poster: 'thedf.jpeg',
    nome: "The Vampire Diaries",
    atorPrincipal: {
        nome: "Damon",
        nascimento: '08/12/1978',
        nacionalidade: "EUA",
    },
    temporada: 8,
    anoDeLancamento: 2009,
}

console.log(`${serie1.nome} ${serie1.atorPrincipal} ${serie1.temporada} ${serie1.anoDeLancamento} -->  ${serie1.poster}`);
console.log(`${serie2.nome} ${serie2.atorPrincipal} ${serie2.temporada} ${serie2.anoDeLancamento} -->  ${serie2.poster}`);
console.log(`${serie3.nome} ${serie3.atorPrincipal} ${serie3.temporada} ${serie3.anoDeLancamento} -->  ${serie3.poster}`);
console.log(`${serie4.nome} ${serie4.atorPrincipal} ${serie4.temporada} ${serie4.anoDeLancamento} -->  ${serie4.poster}`);
console.log(`${serie5.nome} ${serie5.atorPrincipal} ${serie5.temporada} ${serie5.anoDeLancamento} -->  ${serie5.poster}`);
console.log(`${serie6.nome} ${serie6.atorPrincipal} ${serie6.temporada} ${serie6.anoDeLancamento} -->  ${serie6.poster}`);
console.log(`${serie7.nome} ${serie7.atorPrincipal} ${serie7.temporada} ${serie7.anoDeLancamento} -->  ${serie7.poster}`);
console.log(`${serie8.nome} ${serie8.atorPrincipal} ${serie8.temporada} ${serie8.anoDeLancamento} -->  ${serie8.poster}`);
console.log(`${serie9.nome} ${serie9.atorPrincipal} ${serie9.temporada} ${serie9.anoDeLancamento} -->  ${serie9.poster}`);
console.log(`${serie10.nome} ${serie10.atorPrincipal} ${serie10.temporada} ${serie10.anoDeLancamento} -->  ${serie10.poster}`);

let top5 = [];

top5.push(serie1);
top5.push(serie2);
top5.push(serie3);
top5.push(serie4);
top5.push(serie5);

let lancamentos = [];

lancamentos.push(serie6);
lancamentos.push(serie7);
lancamentos.push(serie8);
lancamentos.push(serie9);
lancamentos.push(serie10);


for(let i = 0; i < top5.length; i++){
    console.log(`${top5[i].nome} ${top5[i].atorPrincipal} ${top5[i].temporada} ${top5[i].anoDeLancamento}  --> ${top5.poster}`);
}

for (let i = 0; i < top5.length; i++) {
    document.write(`    
    <div class= h2> 
     <h2>Top 5</h2>
     </div>
        <div class="card"> 
            <img class="foto" src="img./${top5[i].poster}">
        <div class="info">
            <span class="nome">${top5[i].nome}</span>
            <span class="atorPrincipal">${top5[i].atorPrincipal.nome}</span>
            <span class="atorPrincipal">${top5[i].atorPrincipal.nascimento}</span>
            <span class="atorPrincipal">${top5[i].atorPrincipal.nacionalidade}</span>
            </div>
            <span class="temporada">${top5[i].temporada}</span>
            <span class="anoLancamento">${top5[i].anoDeLancamento}</span>

        </div>
    `);
}

for(let i = 0; i < lancamentos.length; i++){
    console.log(`${lancamentos[i].nome} ${lancamentos[i].atorPrincipal} ${lancamentos[i].temporada} ${lancamentos[i].anoDeLancamento}  --> ${lancamentos.poster}`);
 }
 
 for (let i = 0; i < lancamentos.length; i++) {
     document.write(`
     <div class= h2> 
     <h2>Lançamentos</h2>
     </div>
         <div class="card"> 
             <img class="foto" src="img./${lancamentos[i].poster}">
         <div class="info">
             <span class="nome">${lancamentos[i].nome}</span>
             <span class="atorPrincipal">${lancamentos[i].atorPrincipal.nome}</span>
             <span class="atorPrincipal">${top5[i].atorPrincipal.nascimento}</span>
             <span class="atorPrincipal">${top5[i].atorPrincipal.nacionalidade}</span>
             </div>
             <span class="temporada">${lancamentos[i].temporada}</span>
             <span class="anoLancamento">${lancamentos[i].anoDeLancamento}</span>
 
         </div>
     `);
 }