// Date - Trabalhando com datas

//Wed Aug 24 2022 16:06:03 GMT-0300 (Horário Padrão de Brasília) {}
const data1 = new Date();
console.log(data1);

//Mostra a data como foi definido
const date2 = new Date('March 06 2019 09:30');
console.log(date2);

//O mês começa com zero (0 - janeiro, 1 - fevereiro, ...)
const date3 = new Date(2019,00,06,9,30);

console.log(date3);

//Altera o ano para 2023
date3.setFullYear(2023);

console.log(date3);

//Converter a data em uma string
console.log(date3.toDateString());

//Mostra o fuzo orário
console.log(date3.toTimeString());

//Mostra o Ano-mes-dia - hora
console.log(date3.toISOString());

