//metodos de uma string
// Tipos de string

// Tipo primitivo
const mensagem = 'minha primeira mensagem';
console.log(mensagem);

//Tipo objeto
const outraMensagem = new String(' bom dia ');
console.log(outraMensagem);
//tamanho da string
console.log(outraMensagem.length);
//mostrar o caractere da string pelo indice
console.log(outraMensagem[4]);
//pesquisar dentro da string
console.log(outraMensagem.includes('bom'));
//Retorna verdadeiro se a string inicia com bom
console.log(outraMensagem.startsWith('bom'));
//Retorna verdadeiro se a string termina com bom
console.log(outraMensagem.endsWith('bom'));
//Retorna o indice da posição da palavra dentro da string
console.log(outraMensagem.indexOf('dia'));
//Substitui a palavra bom  por mau
console.log(outraMensagem.replace('bom','mau'));
//Remove os espaços do inicio e do fim da string
console.log(outraMensagem.trim());
//separa a string pelo caracter que for informado exemplo ' ' espaço 
console.log(outraMensagem.split(' '));
//Depois de separar referencio a palavra pelo indice
console.log(outraMensagem.split(' ')[2]);