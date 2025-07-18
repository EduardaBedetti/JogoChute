alert("Boas vindas ao jogo do numero scereto");
let numeroSecreto = parseInt(Math.tandom() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;



//enquanto o chute nao for igual
while (chute != numeroSecreto) {
    chute  = prompt("Escolha um número entre 1  e 100");
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentaiva = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentaiva}`);
