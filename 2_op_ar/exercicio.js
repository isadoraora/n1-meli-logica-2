/*resposta aqui

var r = require("readline-sync");
var a = parseInt(r.question("Digite 1 ou 2 :"));
console.log(a)
- Crie uma variável que irá guardar o array com nome e valor dos produtos
- Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
- Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
- Procure no array qual produto foi escolhido pelo usuário
- Calcule o desconto do produto
- Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"

Dica: você pode usar a função .toFixed(digitos) para limitar o numero de casas decimais do desconto.

*/
var r1 = require("readline-sync");

var stuff = [
{nome: 'Calça Jeans',valor: 40},
{nome: 'Camiseta',valor: 20},
{nome: 'Tênis',valor: 90},
{nome: 'Bota',valor: 120}
]
var valor =0;
var posicao = parseInt(r1.question('Digite a posição do produto, de 0 a 3: '))
var porcentagem = parseInt(r1.question('Digite a porcentagem desejada: '))
var escolhaCliente = stuff[posicao];
var desconto = escolhaCliente.valor *(porcentagem/100);

console.log(`Produto ${escolhaCliente} com desconto é R$ ${desconto.toFixed(2)}`);
