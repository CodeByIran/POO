const aluno1 = new Aluno('João', '12345', '1990-01-01');
const aluno2 = new Aluno('Maria', '67890', '1992-02-02');
const aluno3 = new Aluno('Pedro', '98765', '1994-03');

const professor = new Professor('Prof. José', '123456', 'Mestrado em Ciência da Computação');

const disciplina = new Disciplina('Programação Orientada a Objetos', 2022, professor);

// disciplina.alunos.push(aluno1);
// disciplina.alunos.push(aluno2);
// disciplina.alunos.push(aluno3);

disciplina.adicionarAluno(aluno3);
disciplina.adicionarAluno(aluno2);
disciplina.adicionarAluno(aluno1);
// disciplina.adicionarAluno(professor);

console.log(disciplina);