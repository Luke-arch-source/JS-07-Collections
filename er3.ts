//Escreva um programa para criar uma Collection Set do tipo number, inicializada 
// com 10 valores inteiros. O programa deverá solicitar ao usuário, que 
// ele digite via teclado 1 número inteiro e caso ele seja encontrado 
// na Coction Set, exiba na tela a mensagem: O Número NN foi encontrado! 
// Caso o número não seja encontrado, o programa deverá exibir na tela a 
// mensagem: O número NN não foi encontrado!

import ler = require("readline-sync");

const inti: Set<Number> = new Set<Number>();

inti.add(30);
inti.add(90);
inti.add(120);
inti.add(150);
inti.add(180);
inti.add(210);
inti.add(240);
inti.add(270);
inti.add(300);
inti.add(330);

let y;
let p = 0;

while(p == 0){
    false;
    y = ler.questionInt("Digite um número inteiro: ");
    if(inti.has(y)){
        console.log(`O número ${y} está no set`);
    }else{
    console.log(`O número ${y} não está no set`);
    p = 1;
    }
}







