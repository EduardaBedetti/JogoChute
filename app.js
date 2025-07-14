alert("Boas vindas ao jogo do numero scereto");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;



//enquanto o chute nao for igual
while (chute != numeroSecreto) {
    chute  = prompt("Escolha um número entre 1  e 10");
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
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




                                                    
