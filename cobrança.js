/*Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const prompt = require("prompt-sync")()

let distancia = Number(prompt("Qual a distância da sua viagem em Km? "))
let cobranca

if (distancia <= 200) {
    cobranca = distancia * 0.5
} else {
    cobranca = distancia * 0.45
}

console.log(`O valor da sua passagem é de R$ ${cobranca.toFixed(2)}`)