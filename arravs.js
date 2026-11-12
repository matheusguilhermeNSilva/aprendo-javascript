//const list=["manga","maca","pera","banana"];
//console.log(list[0]);
//console.log(list);
//console.log(list.length);
//list.push("abacaxi");
//console.log(list.length);
//console.log(list[list.length-1]);
//list.splice(3,1);
//console.log(list);
//for(let i=0;i<list.length;i++){
//    console.log(list[i],i);
//}
//list.forEach((manga,maca)=>{
//    console.log(manga,maca);
//});

// atividede
const mapaCs2 = [
  "dustII",
  "mirage",
  "vertigo",
  "overpass",
  "train",
  "nuke",
  "ancient",
];
mapaCs2.shift("dustII");
mapaCs2.push("inferno");
for (let i = 0; i < mapaCs2.length; i++) {
  console.log("mapas mais famoso do CS2:", mapaCs2[i], i);
}
console.log("quantidade de mapas:", mapaCs2.length);
const tiros = [10, 20, 30, 40, 50];
let soma = 0;
for (let i = 0; i < tiros.length; i++) {
  soma = soma + tiros[i];
}
console.log("soma dos tiros:", soma);
//soma das notas
const notas = [8, 6, 9, 5];
let somaDasNotas = 0;
for (let i = 0; i < notas.length; i++) {
  somaDasNotas = somaDasNotas + notas[i];
}
let media = somaDasNotas / notas.length;
if (media >= 7) {
  console.log("aprovado");
} else {
  console.log("reprovado");
}
console.log("media das notas:", media);
//node arravsforEach.
const lenda = ["Taco", "FalleN", "KSCERATO", "Yuurih"];
lenda.forEach((lenda) => {
    console.log("Olá, ", lenda);
});
//ativiade com o map
const precos=[100,200,300,400,500];
let precoComDesconto=precos.map((preco)=>{return preco*0.9;});
console.log("preços com desconto:", precoComDesconto);
//atividade com filter
const idade=[12, 15, 18, 20, 16, 25, 30];
let idadeMaior=idade.filter((idade=>idade>=18));
console.log("quem são maiores de idade:", idadeMaior);
//atividade com preco
const produtos=[50, 100, 150, 200];
let total = 0;
for (let i = 0; i < produtos.length; i++) {
  total = total + produtos[i];
}
let produtoComDesconto=total*0.9;
console.log("total com desconto:", produtoComDesconto);
//atividade 10
const tarefas = ["Estudar JavaScript", "Treinar", "Ler", "Jogar CS2"];
const concluidas = [true, false, true, false];
const tarefasPendentes = tarefas.filter((tarefa, index) => !concluidas[index]);
console.log("tarefas pendentes:", tarefasPendentes[3], tarefasPendentes[1]);
