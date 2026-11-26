const pessoa = {
    nome:"Matheus",
    idade:20,
    sexo:"masculino",
    altura:1.70,
    peso:80
};
pessoa["idade"]=21;
pessoa.cidade="são jose dos pinhas";
console.log(pessoa);
console.log("nome:",pessoa["idade"]);
//console.log("oii meu nome e",pessoa["nome"],"minha idade é",pessoa["idade"],"e moro em ",pessoa["cidade"]);
function apresenartarPessoa(pessoa){
    return("oii meu nome e"+ pessoa["nome"]+" minha idade é"+ pessoa["idade"]+" e moro em "+ pessoa["cidade"]);
}
console.log(apresenartarPessoa(pessoa));
const pessoas=[{
    nome:"Matheus",
    idade:20,
},{
    nome:"João",
    idade:17,
},{
    nome:"kailany",
    idade:20
}]
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade >= 18) {
        console.log(pessoas[i].nome, "é maior de idade");
    }else{
        console.log(pessoas[i].nome, "é menor de idade");
    }
}
// saudacao
const usuario={
    nome:"Matheus",
    saudacao:function(){return("oii meu nome é" +this.nome)}
}
console.log(usuario.saudacao());

//9. Listando propriedades com for...in
//Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
const pessoa2 = {
    nome: "Matheus",
    idade: 20,
    sexo: "masculino",
    altura: 1.70,
    peso: 80
}
for (let chave in pessoa2) {
    console.log(chave, pessoa2[chave]);

}
//10. Cálculo de compra
//Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).
const produto ={
    maça:{preco: 2.5, quantidade: 5},
    banana:{preco: 1.5, quantidade: 10},
    laranja:{preco: 3.0, quantidade: 7}
}
produto["uva"]={preco:4.0,quantidade:3};

let totalCompra = 0;
for (let finalDaCompra in produto) {
    totalCompra += produto[finalDaCompra].preco*produto[finalDaCompra].quantidade;
}
console.log("o valor total da compra é:",totalCompra.toFixed(2));
