//Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 
// 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que 
// se pede:
//Mostre na tela todas as cores adicionadas. 
//Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

import ler = require("readline-sync");
const cores: Array<string> = new Array<string>();

let c;
let i = 0;

while(i < 5){
    c = ler.question("Digite uma cor: ");
    cores.push(c);
    console.log(`${i}`);
    i += 1;
}

console.log(`${cores}`);
console.log("Listar todas as cores: ");
for(let f of cores){
    console.log(`${f}`);
}
console.log("\n\n");
const z = cores.sort();
console.log("Ordenar as cores: ");
for(let r of cores){
    console.log(`${r}`);
}




















