//Javascript aula 46 - Constructor Function (Exercício)

//Criar um objeto postagem
//contendo titulo,mensagem,autor,visualizacoes,comentarios,estaaovivo

//Feito por Mauricio
// function Postagem(titulo,mensagem,autor,visualizacoes,comentarios,estaAoVivo) {
//         this.titulo = titulo,
//         this.mensagem = mensagem,
//         this.autor = autor,
//         this.visualizacoes = visualizacoes,
//         this.comentarios = comentarios,
//         this.estaAoVivo = estaAoVivo
//      return ;     
// }

// const coment = ['a','b'];
// const postagem = new Postagem('a','b','c',10,coment,true);

// console.log(postagem.comentarios[0]);

//Feito pelo curso
function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaoAoVivo = false
    
}

let postagem = new Postagem('a','b','c');
console.log(postagem);
postagem.comentarios[0] = 'joão';
postagem.comentarios[1] = 'teste';
console.log(postagem.comentarios[1]);
