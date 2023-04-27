function criarAluno() {
    var ra = document.getElementById("ra").value;
    var nome = document.getElementById("nome").value;

    var aluno = {
        RA: ra,
        Nome: nome
    };

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<BR>Aluno criado: RA " + aluno.RA + ", Nome: " + aluno.Nome;
}

function Aluno(RA, Nome) {
    this.RA = RA;
    this.Nome = Nome;
}

function criarAluno2() {
    var ra = document.getElementById("ra").value;
    var nome = document.getElementById("nome").value;

    var aluno = new Aluno(ra, nome);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br>Aluno criado: RA " + aluno.RA + ", Nome: " + aluno.Nome;
}

function criarAluno3() {
    var ra = document.getElementById("ra").value;
    var nome = document.getElementById("nome").value;

    var aluno = new Object();
    aluno.RA = ra;
    aluno.Nome = nome;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br>Aluno criado: RA " + aluno.RA + ", Nome: " + aluno.Nome;
}