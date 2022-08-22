//Array de objetos

const pessoa = {
    nome: 'jose',
    idade: 50
 };
 
 const carro = {
     modelo: 'etios',
     marca: 'corola'
 };
 
 const casa = {
     cor: 'amarela',
     numero: 9
 };
 
 let conjunto = [];
 
 //conjunto.push(pessoa);
 //conjunto.push(carro);
 //conjunto.push(casa);
 
 conjunto[0]=pessoa;
 conjunto[1]=carro;
 conjunto[2]=casa;
 
 
 console.log(conjunto[0].nome,conjunto[1].modelo,conjunto[2].numero);
 
 const obj = conjunto.pop();
 
 console.log(obj.cor,obj.numero);
 
 