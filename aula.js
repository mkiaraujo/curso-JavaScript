//Javascript - Objeto Endereço

//Criar um objeto endereço que comtenha:
//Rua
//Cidade
//CEP
//exibirEndereco(endereco)

function Endereco(rua,cidade,cep){
    return {
        rua, 
        cidade,
        cep,
        teste(){           
            console.log(cidade,rua,cep)
        }     
    }
}

const endereco1 = Endereco("Rua Castanheiras","Águas Claras","14528-06");

endereco1.teste();
console.log(endereco1);



