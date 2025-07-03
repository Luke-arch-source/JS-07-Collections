//Escreva um programa para criar uma Collection Array do tipo number, 
// inicializada com 10 valores inteiros. O programa deverá 
// solicitar ao usuário, que ele digite via teclado 1 número 
// inteiro e caso ele seja encontrado no Array, exiba na tela a 
// posição deste número na Collection. Caso o número não seja encontrado, o 
// programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import leitura = require("readline-sync");
const inteiro: Array<Number> = new Array<Number>(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

let nui;
let u = 0;
while(u == 0){
    nui = leitura.questionInt("Digite um número inteiro: ");
    if(inteiro.includes(nui)){
    console.log(`O númeo ${nui} está na posição: ${inteiro.indexOf(nui)}`);
    }else{
    console.log(`O número ${nui} não foi encontrado.`);
    u = 1;
    }
}







