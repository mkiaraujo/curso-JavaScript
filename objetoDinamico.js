const mouse = {
    cor : 'red',
    marca : 'dazz'
}

mouse.trocarDPI = function() {
    console.log('mudando DPI');
}
mouse.velocidade = 5000;

delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);