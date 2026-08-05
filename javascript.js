
//calculo de idade
let anoNascimento= 2006
let atual = 2026
const idade = atual - anoNascimento
console.log("minha idade é " + idade + " anos")

//mensagem
const nome = "matheus"
console.log("meu nome é " + nome  )

//salrio
let salario= 1500 ;
let valeTransporte= 300;
let vale = 800;
let salarioDomes= salario + valeTransporte + vale 
console.log("meu pratrimonio e R$"+ salarioDomes);

//mensagem de localização
let cidade="Curitiba"
let estado="PR"
let pais = "Brasil"
console.log("eu vivo em "+ pais +"no estado de "+ estado+ " na cidade de "+ cidade )

//tipo de variavel
let temCarro = true

console.log( typeof  temCarro)

//simulacao bancaria
let saldo = 0; //saldo inicial
saldo +=200;//deposito
saldo-=50; //saque
console.log("meu saldo atual e R$"+saldo) ;

// 6. Média de notas 
let matematica = 8;
let portugues = 7;
let ciencia=9
let media =( matematica + portugues+ ciencia) /3;
console.log("minha media e "+ media);

// 7. Reajuste de salário 

let salarioReajuste = 3000;

let novoSalario = salarioReajuste * 1.10;

console.log("Após um aumento de 10%, o novo salário é R$ " + novoSalario);

 
// 8. Contador de cliques
let cliques = 0;
console.log("Cliques: " + cliques);

cliques = 1; // 1º clique
console.log("Cliques: " + cliques);

cliques = 2; // 2º clique
console.log("Cliques: " + cliques);

cliques = 3; // 3º clique
console.log("O botão foi clicado " + cliques + " vezes.");

 

// 9. Constantes não podem ser alteradas 

const PI = 3.14; 

// PI = 3.1415; // ❌ Isso causaria erro pois constantes não podem ser modificadas 

console.log("PI é uma constante e não pode ser alterada: " + PI); 

 

// 10. Concatenando tipos diferentes 

let mensagem = "O número é "; 

let numero = 42; 

let combinado = mensagem + numero; 

console.log(combinado); // "O número é 42" 

console.log(typeof combinado); // string 

