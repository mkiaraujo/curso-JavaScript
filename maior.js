/*
Função que mostra o valor maior entre dois números.
*/

let numero1 = 20;
let numero2 = 15;

let valor = maior(numero1,numero2);
console.log(valor);

function maior(numero1,numero2){
   return numero1 > numero2 ? numero1: numero2;
   
}