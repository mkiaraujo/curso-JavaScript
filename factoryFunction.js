// Javascript Aula 34 - Factory Functions (Função de Fábrica)

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")            
        }
    }
}

const celular1 = criarCelular('Zenfone',5.5,5000);
console.log(celular1);


function criarCarro(marca,modelo,potencia){
    return{
        marca,
        modelo,
        potencia,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}

const carro1 = criarCarro('toyota','etios',150);

console.log(carro1);