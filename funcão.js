function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}
function somar(a, b) {
  return a + b;
}
function divisao(a, b) {
  return a / b;
}
const resultadoSoma = calcular(225, 100, somar);
{
  console.log("resultado da soma: " + resultadoSoma);
}
const resultadoDivisao = calcular(225, 100, divisao);
{
  console.log("resultado da divisao: " + resultadoDivisao);
}
//atividade
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Olá! Seja bem-vindo(a)!");
//atividade,apresentação e idadeia de interação com o usuário
rl.question("Qual é o seu nome?",(nome)=>{
  rl.question("qual e sua idade?",(idade)=>{
  if(idade >=18 ){
    console.log(`Vocé ${nome} é maior de idade ${idade}`);
  } else{
    console.log(`Vocé é menor de idade:${idade}`);
  }
  })
})
//atividadeimc
function calcularIMC(peso, altura) {
  return peso/(altura*altura);
}
let imc=calcularIMC(80, 1.80);
console.log("o seu imc e:"+imc.toFixed(2));
  //avaliação de prova 
function avaliacaoProvas(nota){
  if (nota>=7){return
   "aprovado";
  }else if(nota>=5){
    return "Recuperação";
  }else{
    return "reprovado";
  }
}
let resultadoDaNota=avaliacaoProvas(6);
console.log("o aluno ou aluna está:"+resultadoDaNota);
//ativiade de impar ou par
function verificarParOuImpar(numero){
  if(numero%2==0){
    return "true";
  }else{
    return "false";
  }

}
let imparOuPar=verificarParOuImpar(10);
console.log("o numero presente é igual a:"+imparOuPar);
//soma
function somarNumeros(a,b){
  return a+b;
}
let soma= somarNumeros(10,20);
console.log("a soma dos numeros é:"+soma);
//ativiade de troco
function calcularTroco(valorPago,valorProduto){
  return valorPago-valorProduto;
}
let valorRcebido=calcularTroco(100.00,80.76);
console.log("p valor do troco é R$"+valorRcebido.toFixed(2));
//arrow function
const adicao = (a,b)=> a+b;
let resultadoAdicao=adicao(10,20);
console.log("o resultado da adição é:"+resultadoAdicao);
//Callback simples
function exercutarcallback(callback){
 return callback();
}
let resultadocallbank=exercutarcallback(function(){
  return 20+30;
});
console.log("o resultado do callback é:"+resultadocallbank);