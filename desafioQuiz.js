const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("seja bem vindo ao quiz de perguntas e reposta sobre javascript");
rl.question("qual é o seu nome?", (nome) => {
  console.log(`seja bem vindo ${nome}`);
  console.log("vamos começar o quiz");
  let pontos = 0;
  rl.question(
    "1)Qual é a palvara usamos para criar  uma funçao?\n(A)function\n(B)funcao\n(c)funcçao\nReposta:",
    (resposta) => {
      if (resposta.toUpperCase() == "A") {
        console.log("repsota correta");
        pontos++;
      } else {
        console.log("resposta incorreta");
      }
      rl.question(
        "2)Qual dessas e uma estrutura de repetição?\n(A)for\n(B)if\n(c)else\nReposta:",
        (reposta) => {
          if (reposta.toUpperCase() === "A") {
            console.log("resposta correta");
            pontos++;
          } else {
            console.log("repsota incorreta");
          }
          rl.question(
            "3)Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c)texto\nReposta:",
            (resposta) => {
              if (resposta.toUpperCase() === "B") {
                console.log("resposta correta");
                pontos++;
              } else {
                console.log("resposta incorreta");
              }
              if(pontos===3){
                console.log(`parabens ${nome}! Você acertou todas as perguntas.`);
              } else if(pontos===2){
                console.log(`muito bem ${nome}! Você acertou ${pontos} perguntas.`);
              }else if(pontos===1){
                console.log(`você acertou ${pontos} pergunta ${nome}.`);
              }
              rl.close();
            },
          );
        },
      );
    },
  );
});
