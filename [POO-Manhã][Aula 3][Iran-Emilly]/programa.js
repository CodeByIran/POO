let alunos = ["João" , "Maria", "José", "Pedro", "Paulo"]

alert(alunos[3]) /*1a*/
alunos[alunos.length -1] = "Gerson"; /*1b*/
alunos.push("Joaquim"); /*1c*/
//console.log(alunos); 
 
let notas = [10, 8, 5, 7, 9, 6]; /*1d*/

/*1e*/
for (let i = 0;  i < alunos.length; i++){
     console.log(`Aluno: ${alunos[i]} -> Nota: ${notas[i]}`);   
}
