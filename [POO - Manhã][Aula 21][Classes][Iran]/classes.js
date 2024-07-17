class Aluno {
    constructor(nome, matricula, dataDeNascimento) {
      this.nome = nome;
      this.matricula = matricula;
      this.dataDeNascimento = dataDeNascimento;
    }
  }
  
  class Professor {
    constructor(nome, siape, formacao) {
      this.nome = nome;
      this.siape = siape;
      this.formacao = formacao;
    }
  }
  
  class Disciplina {
    constructor(nome, ano, professor) {
      this.nome = nome;
      this.ano = ano;
      this.professor = professor;
      this.alunos = [];
    }

    adicionarAluno(aluno){
        if(aluno instanceof Aluno){
            this.alunos.push(Aluno);
        } else {
            console.error(`Fera, aqui só pode objeto da classe Aluno. Tenha mais atenção por favor.`)
        }
    }
  }