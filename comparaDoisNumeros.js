/*
Função que compara dois números, mostrando o maior, o menor 
 e se os números são iguas retorna o primeiro valor passado.
*/

function compara(numero1,numero2) {
    
    if (numero1 > numero2) {
        return numero1;
    } 
    else if(numero1 < numero2){
        return numero2;
        
    }
    else {
        return numero1;
    } 
}