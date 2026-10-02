for (let numero = 0; numero <= 16; numero++) {
  if (numero % 2 === 0) {
    console.log("numero par: " + numero);
  }
}
const palavra = "javascript";
for (let contador = 5; contador < palavra.length; contador++) {
  console.log(palavra[contador]);
}

for (let contagemRevar = 5; contagemRevar >= 0; contagemRevar--) {
  console.log(contagemRevar);
}
for (let estoque = 10; estoque >= 5; estoque--) {
  //console.log("estoque disponivel: " + estoque);
  if (estoque <= 2) {
    console.log("estoque baixo: " + estoque);
  } else {
    console.log("estoque disponivel: " + estoque);
  }
}

for (let crescente = 0; crescente <= 20; crescente++) {
  console.log(crescente);
}
for (let descrescente = 20; descrescente >= 0; descrescente--) {
  console.log(descrescente);
}
for (let bonecoDeEstoque = 6; bonecoDeEstoque < 20; bonecoDeEstoque++) {
  console.log("estoque disponivel: " + bonecoDeEstoque);
}
//ATIVIDADE
let tabuadaEscolhida = 3;
switch (tabuadaEscolhida) {
  case 1:
    for (let comeco = 0; comeco <= 10; comeco++) {
      console.log("3 x" + comeco + "=" + 3 * comeco);
    }
    console.log("tabuada do 3");
    break;
  case 2:
    for (let comeco = 0; comeco <= 10; comeco++) {
      console.log("7 x" + comeco + "=" + 7 * comeco);
    }
    console.log("tabuada do 7");
    break;
  case 3:
    for (let comeco = 0; comeco <= 10; comeco++) {
      console.log("9 x" + comeco + "=" + 9 * comeco);
    }
    console.log("tabuada do 9");
    break;
  default:
    console.log("tabuada invalida");
}
//ativiade 2
let Fahrenheit = 0;
for (let celsius = 0; celsius <= 100; celsius += 10) {
  console.log(celsius + "*c=" + (fahrenheit = (celsius * 9) / 5 + 32) + "*F");
}
// atividade 3
//let resultado = 1;
//let fatorial = 5;
//for (let fatorial = 5; fatorial > 0; fatorial--) {
// resultado *= fatorial;
// console.log("fatorial de 5 = " + resultado);
//}
//while (fatorial > 0) {
//  resultado *= fatorial;
//  console.log("fatorial de 5 = " + resultado);
//  fatorial--;
//}
//atividade 4
//let anterior = 0;
//let atual = 1;
//let proximo = 0;
//for (let num = 0; num < 14; num++) {
//  proximo = anterior + atual;
//  anterior = atual;
// atual = proximo;
//  console.log(proximo);
//}
//atividade 5
//let numero = 4821;
//let soma = 0;
//for (let digitos = 0; digitos < 4; digitos++) {
// soma = soma + (numero % 10);
//numero = Math.floor(numero / 10);
//}
//console.log("soma dos digitos = " + soma);
//escada
//let degrau = 5;
//for (let arterisco = 1; arterisco <= degrau; arterisco++) {
//  console.log("*".repeat(arterisco));
//}
let pago = 287;
let nota100 = 100;
let quantidade100 = 0;
let nota50 = 50;
let quantidade50 = 0;
let nota20 = 20;
let quantidade20 = 0;
let nota10 = 10;
let quantidade10 = 0;
while (pago >= nota100) {
  pago = pago - nota100;
  quantidade100++;
  console.log(
    "valor pago: " + pago + " quantidade de notas de 100: " + quantidade100,
  );
}
while (pago >= nota50) {
  pago = pago - nota50;
  quantidade50++;
  console.log(
    "valor pago: " + pago + " quantidade de notas de 50: " + quantidade50,
  );
}
while (pago >= nota20) {
  pago = pago - nota20;
  quantidade20++;
  console.log(
    "valor pago: " + pago + " quantidade de notas de 20: " + quantidade20,
  );
}
while (pago >= nota10) {
  pago = pago - nota10;
  quantidade10++;
  console.log(
    "valor pago: " + pago + " quantidade de notas de 10: " + quantidade10,
  );
}
//dados
let resultado = 0;
for (let sorteio = 1; sorteio <= 100; sorteio++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let soma = dado1 + dado2;
  if (soma == 7) {
    resultado = resultado + 1;
  }
}
console.log(resultado);
//numero secreto
let numeroSecreto = 22;
let chute = 0;
let tentativas = 0;
do {
  chute = Math.floor(Math.random() * 100) + 1;
  tentativas++;
  if (chute > numeroSecreto) {
    console.log("chute maior" + chute);
  } else if (chute < numeroSecreto) {
    console.log("chute menor" + chute);
  } else if (chute === numeroSecreto) {
    console.log("acertou " + chute);
  }
} while (chute !== numeroSecreto);
console.log("numero de tentativas " + tentativas);
//Quanto tempo até bater a meta
let saldo = 0;
let meses = 0;
let anos = 0;
let aporte = 200;
while (saldo < 5000) {
  saldo = saldo * 1.005;
  saldo = saldo + aporte;
  meses++;
  anos = meses / 12;
}
console.log(
  "quantos mes passou " + meses + " quantos anos para concluir " + anos,
);
console.log("saldo final R$" + saldo.toFixed(2));
//frase
const frase = "Jujutsu Kaisen";
let vogais = 0;
for (let letra = 0; letra < frase.length; letra++) {
  if ("aeiou".includes(frase[letra].toLowerCase())) {
    vogais++;
  }
  console.log(frase[letra]);
}
console.log("quantas vogais tem " + vogais);
