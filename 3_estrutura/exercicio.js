//resposta aqui
var r1 = require("readline-sync");

//criando meu array com objects
var produtos = [
    {nome:'leite', tempoDeValidade:5,congelado:false},
    {nome:'iogurte', tempoDeValidade:30,congelado:true },
    {nome:'ovo', tempoDeValidade:10,congelado:false },
    {nome:'batata', tempoDeValidade:15,congelado:false},
    {nome:'margarina', tempoDeValidade:24,congelado:true},
];
//parte do funcionario
var escolha = parseInt(r1.question('Digite a posição do produto desejado, de 0 a 4: '))

var vencimento = parseInt(r1.question(`Digite quanto tempo falta para o ${produtos[escolha].nome} vencer:`))
console.log("vencimento",vencimento)

//calculando a porcentagem
//var produtoSelecionado = produtos[escolha];
porcentagem = (vencimento * 100)/produtos[escolha].tempoDeValidade;
console.log('porcentagem', porcentagem)

//minha parte
if(porcentagem <= 2){
    console.log(`Descartar ${produtos.nome[escolha]}, muito próximo do vencimento!`);
}
else if(porcentagem <=10 && !escolha.congelado){
    console.log(`Desconto! ${produtos.nome} não congelado e próximo da validade!`)
}
else if(porcentagem <=5 && escolha.congelado){
    console.log(`Desconto! ${produtos.nome} congelado e próximo do vencimento.`)
}
else{
console.log(`${produtos[escolha].nome} longe do vencimento!`)
};