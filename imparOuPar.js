// Recebe uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar

exibirTipo(10);

function exibirTipo(limite) {
    if(limite < 0){
        console.log('Informe um número inteiro positivo');
    }
    else if(typeof limite != "number") {
        console.log('Informe um número');
    }
    else {
        for (let index = 0; index <= limite; index++) {
            (index % 2 === 0) ? console.log(index,'par'): console.log(index,'impar');
        }                                         
    }
}

