// camelCase umDoisTresQuatro
// function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
//     return{
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar(){
//             console.log("Fazendo ligação...")
//         }
//     }
// }

// Pascal Case - UmDoisTresQuatro

function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}

const celular = new Celular('asus',5.5,5000);
console.log(celular);

function Carro(marca,modelo,potencia){
    this.marca = marca,
    this.modelo = modelo,
    this.potencia = potencia,
    this.ligar = function(){
        console.log("Ligando o carro...");
    }
}

const carro = new Carro('toyota','etios',150);
console.log(carro);
