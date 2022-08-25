//Javascript Aula 45 - Objeto Postagem de Blog (Exercício)
/* Eu quero que você crie neste exercício um objeto de postagem
de blog que vai conter as seguintes propriedades
*/

// class PostagemBlog {
//     constructor(titulo, mensagem, autor, vizualizacoes, estado, comentarioAutor, comentarioMensagem) {
//             this.titulo = titulo;
//             this.mensagem = mensagem;
//             this.autor = autor;
//             this.vizualizacoes = vizualizacoes;
//             this.estado = estado;
//             this.comentarioAutor = comentarioAutor;
//             this.comentarioMensagem = comentarioMensagem;

//     }
// }

// const pb = new PostagemBlog('Primeira Postagem',
// 'Minha primeira mensagem',
// 'Paulo',
// 1000,
// 'online',
// 'João',
// 'Apredi muito');

// console.log(pb.vizualizacoes);


//Exemplo do curso


let postagem = {
    titulo : 'a',
    mensagem : 'b',
    autor : 'c',
    visualizacoes : 10,
    comentarios : [
        { autor : 'a', mensagem : 'b' },
        { autor : 'c', mensagem : 'd' }
    ],
    estaAoVivo : true
}

console.log(postagem);

console.log(postagem.comentarios[0].autor);
console.log(postagem.comentarios[0].mensagem);
