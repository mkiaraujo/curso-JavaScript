const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela: {
        vertical:155,
        horizontal: 75
    },
    ligar: function() {
        console.log("Fazendo ligação...");
    }
}
console.log(celular);

const novoObjeto = Object.assign({
    processador: 'intel', bateria: 5000
},celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);