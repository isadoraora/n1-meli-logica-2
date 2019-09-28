let numero = 0;
while (numero < 100) {
    numero += 2;
    console.log(numero)
};

const r = require("readline-sync");
let star = '';
let numeroUsuaio = parseInt(r.question("Quantidade de estrelas: "))
let contador = 0;
while (contador < numeroUsuaio) {
    contador++;
    star += '*';
    console.log(star);
}

let nome = r.question("Digite seu nome: ");
console.log(`Olá, ${nome}`);
let palavra = '';
while (palavra != 'Tchau') {
    palavra = r.question("Digite algo ou Tchau para vazar!");
    console.log(`Você digitou ${palavra}`);
} console.log(`Tchau, ${nome}`);

let passos = 0;
const total = 500;

do {
    passos += parseInt(r.question("Digite a quantidade de passos já andados: "));
} while (passos < total);
console.log('Parabéns, queridxs!');

let number = 11;
while (number > 1) {
    number--;
    console.log(number);
}

let operações = [5, 37, 18, 59, 12, -5];
let maior = Math.max.apply(null, operações);
console.log(`O maior número da lista é ${maior}`);
let menor = Math.min.apply(null, operações);
console.log(`O menor número da lista é ${menor}`);




