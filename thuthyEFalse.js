let valor = 1;
if (valor) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

//exercicio 1
let idade = 15;

//if (idade >=18){
//  console.log("maior de idade");
//}else{
//  console.log("menor de idade");
//}

//exercicio 2

idade >= 18 ? console.log("maior de idade") : console.log("menor de idade");

//saudacao de acordo com horario
let horaATUAL = 15;
if (horaATUAL >= 6 && horaATUAL < 12) {
  console.log("Bom dia");
} else if (horaATUAL >= 12 && horaATUAL < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

//numrto negativo, positivo ou zero
let numero = 20;

if (numero > 0) {
  console.log("positivo");
} else if (numero < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

// 4. Conversão de nota em conceito

let nota = 8.5;

if (nota >= 9) {
  console.log("Conceito A");
} else if (nota >= 8) {
  console.log("Conceito B");
} else if (nota >= 6) {
  console.log("Conceito C");
} else if (nota >= 4) {
  console.log("Conceito D");
} else {
  console.log("Conceito E");
}

//numero par ou impar
let numero2 = 7;

if (numero2 % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}

// 6. Menu com switch-case

let opcao = 2;

switch (opcao) {
  case 1:
    console.log("gohan");
    break;
  case 2:
    console.log("son goku");
    break;
  case 3:
    console.log("vegeta");
  default:
    console.log("opcao invalida");
    break;
}

//validação obrigatoria de email
//let email =" maria@gmail.com"
//if (email=== ""){
// console.log("email não preenchido")
//}
//else{
// console.log("email preenchido")
//}

//validação de senha segura
let senha = "123abcd";
let senhaValida = false;

if (senhaValida) {
  console.log("senha segura");
} else {
  console.log("senha muito curta");
}

//compra com salario
let salarioDisponivel = 100;
let valorDaCompra = 200;
if (salarioDisponivel >= valorDaCompra) {
  console.log("compra realizada com sucesso");
} else {
  console.log("saldo insuficiente");
}

// 10. Validação de formulário completo
let nome = "matheus";
let email="matheus@gmail.com";
let idade2 = 20;

let formularioValido = true;

if (formularioValido) {
  console.log("formulario enviado com sucesso");
}
else {
  console.log("formulario invalido");
}