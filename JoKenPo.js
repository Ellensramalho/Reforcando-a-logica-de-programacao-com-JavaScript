/*Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

const prompt = require("prompt-sync")()
console.log("Bem-vindo ao jogo JoKenPo!")

const opcoes = ["Pedra", "Papel", "Tesoura"]
let jogador = prompt("Escolha Pedra, Papel ou Tesoura: ")
let computador = opcoes[Math.floor(Math.random() * 3)]

console.log(`Jogador escolheu: ${jogador}`)
console.log(`Computador escolheu: ${computador}`)

if (jogador === computador) {
    console.log("Empate!")
} else if (
    (jogador === "Pedra" && computador === "Tesoura") ||
    (jogador === "Papel" && computador === "Pedra") ||
    (jogador === "Tesoura" && computador === "Papel")
) {
    console.log("Jogador venceu!")
} else {
    console.log("Computador venceu!")
}