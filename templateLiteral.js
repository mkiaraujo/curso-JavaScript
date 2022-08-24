// Javascript Aula 39 - Template Literal

//Escape sequence
const mensagem = 
'Oi isso é a minha \n' +
'\'primeira\' mensagem';

console.log(mensagem);

//Tipos de Literais 
//Object {}
//Boolean true, false
//string '',""
//Template literal ` `(crase)


const outraMensagem = `Oi isso é a minha
'primeira' mensagem`;

console.log(outraMensagem);


const nome = 'Mauricio';
const email = 
`Ola ${nome} ${2+2}

Obrigado por se inscrever no canal

Para acompanhar os vídeos não se esqueça de ativar o sino.


Obrigado,
Araujo.`;

console.log(email);