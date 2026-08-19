//desafio da calculadora de troco
console.log("Bem-vindo à calculadora de troco!");
let valorTotal= 17.90
let valorPago= 20
let troco= valorPago -valorTotal

console.log(" o valor do troco e R$"+troco.toFixed(2));

//outro exemplo
let idade=20
console.log("maior de idade ?" + (idade>=18));

let nota1=6
let nota2=8
let media= (nota1+nota2)/2
console.log("passei de ano ?"+ (media>=12));

//simulação de senha 
let senha= "123456"
let senha2= "123456"

console.log("senha esta correta ?"+(senha===senha2));

// 5. Controle de faltas 
let totalAulas=80;
let totalFaltas= 25;
let limiteFaltas= totalAulas* 0.25;
console.log("aluna foi reprovada por faltas ?"+(totalFaltas>limiteFaltas));

//verificação de login
let temLogin=true
let temSenha=true
console.log("precisa de login ou senha ?"+(temLogin && temSenha));

// valor negado 
let disponovel= true
console.log("valor esta disponivel ?"+(!disponovel));

//condicao composta
let numero1=4;
let numero2=4;

console.log( 
    numero1 % 2 === 0 &&
    numero2 %2 === 0 &&
    numero1 === numero2
);

//calcular de porcentagem
let total =120;
let porcentagem= total * 0.25;
console.log("25% de 120 é ?"+ (porcentagem));

//ordem de operações
let resultado = 2 + 3 * 5; 

console.log("Resultado da expressão 2 + 3 * 5: " + resultado); 