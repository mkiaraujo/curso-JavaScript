//Velocidade máxima de até 70 km
//A cada 5 km acima do limite você ganha 1 ponto na carteira
// Dica usar a função Math.Floor() para arredondar para o número inteiro
//Caso pontos maior que 12 -> "Carteira suspensa"

let velocidade = 85; //Velocidade do veículo
let limite = 5;      //Limite de velocidade tolerada
let radar = 70;      //Velocidade do radar
console.log(verificarVelocidade(velocidade,radar,limite));

function verificarVelocidade(velocidade,radar,limite) {
    let acima = 0;
    let pontuacao = 0;
   
    if (velocidade > radar && Math.floor(velocidade) < (radar + limite)){
        return 'Atenção!. Limite de velocidade atingido: ' + velocidade + ' km/h'; 
    }
    else if (velocidade <= radar ) {
        return 'Dentro da velocidade permitida: ' + velocidade + ' km/h'; 
    }

    acima = velocidade - radar;       
    pontuacao = Math.floor(acima / limite);

    if (pontuacao > 12){
        return 'Carteira Suspensa. Velocidade: ' + velocidade + ' km/h. Pontos na carteira: ' + pontuacao;
    }
    return 'Velocidade: ' + velocidade  + ' km/h. Pontos na carteira: ' + pontuacao;
}