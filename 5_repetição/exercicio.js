/*
1) Crie um programa para printar todos os números pares de 1 a 100.
- Números pares são todos os números que dividos por 2 tem resto 0
- Qual operador que retorna o resto da divisão? Vamos usar ele!
*/
for (let i = 1; i < 101; i += 2) {
    console.log(`${i}`);
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas 
//no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
// Você pode concatenar uma string usando: + ou +=
var r = require("readline-sync")
let simbolo = '*';
let num = r.question('Digite um número, queridx: ')
for (i = 0; i < num; i++) {
    console.log(simbolo);
    simbolo += '*';
}

let numeroDigitado = parseInt(r.question("quantidade de estrelas"))
let estrelas = '';
for (let i = 0; i <= numeroDigitado; i++) {
    estrelas += "*";
    console.log(estrelas);
}

/*3) Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder 
"Olá [nome]".Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode 
dizer "Tchau".O programa vai dizer "Tchau [nome]" e finalizar o programa.  Aqui você pode usar while ou do/while para 
resolver
INICIO
recebe nome 
printa Olá, 'nome'
enquanto recebe palavra
    printa palavra
    alerta'deseja sair, escreva 'Tchau'
    se 'Tchau'{
        printa Tchau, 'nome'
    }
FIM
*/
var r = require("readline-sync")

let nome = r.question('Qual seu nome? ');
console.log(`Olá, ${nome}`);
let palavraChave = '';
do {
    palavraChave = r.question("Digite algo, querido, ou Tchau ")
    console.log(`Você digitou ${palavraChave}`);
} while (palavraChave != "Tchau")
console.log(`Tchau, ${nome}`);


//do {
//    r.question('');
//   console.log('Se deseja sair digite Tchau');
//} while (palavraChave != 'Tchau');
//console.log(`Tchau, ${nome}`);

/*4) Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a meta seja
atingida.
A meta a ser atingida é de 500 passos.
- Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou no exercicio 3.
INICIO
recebe passos
enquanto passos <500
passosTotal = passos++
printas Voce atingiu a meta!
FIM
*/
var r = require("readline-sync");
let passos = 0;
const meta = 500;

while (passos < meta) {
    passos += parseInt(r.question('Informe a quantidade de passos: '))
}
console.log('Parabéns, queridona!')