function calcular(numero1, numero2,operacao){
    return operacao(numero1, numero2);
} 
function somar(a, b){
    return a + b;
}
function divisao(a, b){
    return a / b;
}
const resultadoSoma=calcular(225,100,somar);{
    console.log("resultado da soma: " + resultadoSoma);
}
const resultadoDivisao=calcular(225,100,divisao);{
    console.log("resultado da divisao: " + resultadoDivisao);
}

