/*
    Exercício 3
        - Calcular a média da turma 
        - Imprimir o aluno com a maior Média
*/

const lista = [
    {
        "nome": "José",
        "media": 87
    },
    {
        "nome": "João",
        "media": 65
    },
    {
        "nome": "Maria",
        "media": 88
    },
    {
        "nome": "Sandra",
        "media": 75
    },    
    {
        "nome": "Bento",
        "media": 63
    },
    {
        "nome": "Josefa",
        "media": 78
    },    
];

var media = 0;
var maiorMedia = 0;
var nomeAluno = "";

for (var i of lista) {
    media += i.media;

    if (i.media > maiorMedia) {
        maiorMedia = i.media;
        nomeAluno = i.nome;
    }

}

console.log(media/lista.length);
console.log("A maior média é ", maiorMedia, "para o aluno ", nomeAluno);
