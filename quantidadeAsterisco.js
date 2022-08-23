/* 
Criar uma função que exiba a quantidade de 
* que aquela linha possui.
*/

exibirAsteriscos(1);

function exibirAsteriscos(linhas){
    //Resolvendo com um loop
    // let asteriscos = '';
    // for (let index = 0; index < linhas; index++) {
    // console.log(asteriscos += '*');
    // }

    // Resolvendo com dois loops
    for (let index = 1; index <= linhas; index++) {
        let asterisco = '';
        for (let ind = 1; ind <= index; ind++) {
            asterisco += '*';            
        }
        console.log(asterisco);
    }
}