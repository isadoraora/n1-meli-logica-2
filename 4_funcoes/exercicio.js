//resposta aqui
//calculadora da lumelância
const r = require("readline-sync");


console.log("Olá, seja bem-vindo!")
let opcao = r.question('Digite a operação desejada: + / - / % / * = ')
let primeiroValor = parseInt(r.question('Digite o primeiro número: '))
let segundoValor = parseInt(r.question('Digite o segundo número a ser calculado: '))

function soma(v1, v2) {
    let resu = v1 + v2;
    return resu;
}
function subtracao(v1, v2) {
    let resu = v1 - v2;
    return resu;
}
function multiplicacao(v1, v2) {
    let resu = v1 * v2;
    return resu;
}
function divisao(v1, v2) {
    let resu = v1 / v2;
    return resu;
}
switch (opcao) {
    case '+':
        let r1 = soma(primeiroValor, segundoValor);
        console.log(`O resultado é ${r1}`)
        break;
    case '-':
        let r2 = subtracao(primeiroValor, segundoValor);
        console.log(`O resultado entre ${primeiroValor} e ${segundoValor} é: ${r2}`)
        break;
    case '*':
        let r3 = multiplicacao(primeiroValor, segundoValor);
        console.log(`O resultado entre ${primeiroValor} e ${segundoValor} é: ${r3}`)
        break;
    case '/':
        let r4 = divisao(primeiroValor, segundoValor);
        console.log(`O resultado entre ${primeiroValor} e ${segundoValor} é: ${r4}`)
        break;
    default:
        console.log(`Operação inválida!!!`)
}
