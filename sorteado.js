/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

const prompt = require("prompt-sync")()()
let jogador = Number(prompt("Tente adivinhar o número que o computador sorteou (entre 1 e 5): "))
let computador = Math.floor(Math.random() * 5) + 1

if (jogador === computador) {
    console.log("Parabéns! Você adivinhou o número!")
} else {
    console.log(`Que pena! O número sorteado era ${computador}.`)
}