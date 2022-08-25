//Javascript aula 47 - Faixa de preço (Exercício)

/*
Criar um array de objetos de faixa de preço para que
ela possa ser usado em um site igual o mercado livre
- faixas, tooltip ,minimo, maximo
*/

// Feoto por mauricio
// let faixa1 = {
//     tooltip : 'dica',
//     minimo : 10,
//     maximo : 20
// }

// let faixa2 = {
//     tooltip : 'dica2',
//     minimo : 20,
//     maximo : 50
// }


// let faixaPreco = [];

// faixaPreco[0] = faixa1;
// faixaPreco[1] = faixa2;

// console.log(faixaPreco[1].minimo);
   
//Feito no curso

//Primeira opção
let faixas = [
    {tooltip:'até R$700', minimo: 0, maximo: 700},
    {tooltip:'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip:'R$1000 ou mais', minimo: 1000, maximo: 999999}
    
];

console.log(faixas[0].tooltip);

//Segunda opção (Usando Factory Function)
function criaFaixaPreco(minimo,maximo){
    if(verificaPreco(minimo,maximo)){

            let tooltip = '';
            if(maximo <= 700){
                tooltip = `até R$700`;
            }
            else if(maximo <= 1000){
                tooltip = `de R$700 a R$1000`;
            }
            else {
                tooltip = `R$1000 ou mais`;
            }
            return {
                tooltip,
                minimo,
                maximo
            }
    }
    return 'Valores incompatíveis';
}


function verificaPreco(minimo,maximo){
    if(minimo < 0 || maximo < 0 || minimo > maximo){
        return false;
    }
    return true;
        
}



let preco = new criaFaixaPreco(600,700);
console.log(preco.tooltip);


//Terceira opção (Constructor function)

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('a',10,20),
    new FaixaPreco('b',30,40),
    new FaixaPreco('c',40,60)
];

faixas3.forEach(element => {
    for (const key in element) {
            const elem = element[key];
               
    }
    console.log(element.tooltip);    
    console.log(element.minimo);
    console.log(element.maximo);     
       
});



