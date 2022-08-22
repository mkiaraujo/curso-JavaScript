/* 
Exercício Nota Escolar
Obter a média a partir de um array

 0 - 59  : F
60 - 69  : D
70 - 79  : C
80 - 89  : B
90 - 100 : A
*/

const boletim = [0,0,80];

console.log(mediaDoAluno(boletim));

//Função retorna a nota do aluno
function mediaDoAluno(notas) {
    const media = calculaMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
    
}
//Função calcula a média do aluno
function calculaMedia(array){
    let soma = 0;
      
    array.forEach(element => {
        soma += element;
    }); 
    return soma / array.length;
}