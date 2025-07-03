//Escreva um programa para criar uma Collection Set do tipo number. O programa 
// deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não 
// repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que 
// se pede:
//Mostre na tela todos os elementos da Collection Set. 

import ler = require("readline-sync");
const inteo: Set<Number> = new Set<Number>();

let n;
let i = 0;
let j = 0;


while(i < 10){
    console.log("Não repita os números digitados!");
    n = ler.questionInt(`Digite o ${i+1}• número inteiro: `);
    inteo.add(n);
    i += 1;
}

console.log("Listar dados do set:");

for(let x of inteo){
    console.log(`${x}`);
}







