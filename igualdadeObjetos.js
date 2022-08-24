//Exercício 43 - Igualdade de Objetos

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep

}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');
const endereco3 = endereco1;


//Compara se as propriedades do endereco são iguais
function saoIguas(endereco1,endereco2){
    
    return endereco1.rua === endereco2.rua &&
     endereco1.cidade === endereco2.cidade &&
     endereco1.cep === endereco2.cep;
}


console.log(saoIguas(endereco1,endereco2));

//Compara se a referência do objeto aponta para o mesmo local na memória
function temEnderecoMemoriaIguas(ender1,ender2){
    return ender1 === ender2;

}

console.log(temEnderecoMemoriaIguas(endereco1,endereco2));