// Valor divisível por 3 => Fizz
// Valor divisível por 5 => Buzz
// Valor divisível por 3 e por 5 => FizzBuzz
// Não divisível por 3 ou 5  => retorna a entrada
// Não é um número

let valor = 1;
const resultado = fizzBuzz(valor);

console.log(resultado);

function fizzBuzz(entrada){
        
    if (typeof(entrada) !== 'number'){
        return 'Não é um número';
    }
    else if(((entrada % 3) === 0) && ((entrada % 5) === 0)){
        return 'FizzBuzz';
    }
    else if((entrada % 3) === 0 ){
        return 'Fizz';
    }
    else if((entrada % 5) === 0){
        return 'Buzz';
    }
    else {
        return entrada;
    }
    
}
