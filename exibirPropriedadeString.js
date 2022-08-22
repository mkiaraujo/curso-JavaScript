// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

//Objeto pessoa
const pessoa = {
    nome : 'paulo',
    nomePai : 'jose',
    nomeMae : 'aline',
    idade : 30,
    altura : 180
};

//Objeto array
const conjunto = ['vermelho',1,'amarelo',30,'roda','casa'];

exibirPropriedades(pessoa);

function exibirPropriedades(obj){
    for (const key in obj) 
       if(typeof obj[key] === 'string')
           console.log(key,obj[key]);
}