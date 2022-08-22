// Criar função soma que retorna a
// soma de todos os múltiplos de 3 e 5

// Multiplos de 3
// 3,6,9
//Multiplos de 5
//5,10

/*
Somando os multiplos
Armazenar os multiplos de 3
Armazenar os multiplos de 5
Somar os dois
*/

somar(15);
function somar(limite) {
    let somador=0;
    //Se não for um número retorna 1
    if(typeof limite !== 'number'){
        console.log(1);
    }
    else if(limite < 0){ // Se for negativo retorna 2
        console.log(2);
    }
    else{// retorna a soma dos multiplos de 3 e 5
        for (let index = 0; index <= limite; index++) {
            if(index % 3 === 0){// soma os multiplos de 3
                somador += index; 
                     
            }
            else if (index % 5 === 0){// soma os multiplos de 5
                somador += index;            
            
            }
        }
        console.log(somador);
    }
    
}