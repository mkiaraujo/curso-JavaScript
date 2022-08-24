//Javascript - Objeto Endereço

//Criar um objeto endereço que comtenha:
//Rua
//Cidade
//CEP
//exibirEndereco(endereco)

function endereco(rua,cidade,cep){
    return {
        rua, 
        cidade,
        cep,
        teste(){           
            console.log(cidade,rua,cep)
        }     
    }
}

const endereco1 = endereco("Rua Castanheiras","Águas Claras","14528-06");

endereco1.teste();
console.log(endereco1);

let enderecoPessoa = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

 function exibirEndereco(){
     for (const key in enderecoPessoa) {
         console.log(key,enderecoPessoa[key]);
     }
 }

exibirEndereco(enderecoPessoa);