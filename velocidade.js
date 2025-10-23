/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

const prompt = require("prompt-sync")()

let velocidade = Number(prompt("Qual a velocidade atual do carro? "))

if (velocidade > 80) {
    let multa = (velocidade - 80) * 5
    console.log(`Você foi multado! O valor da multa é de R$ ${multa.toFixed(2)}`)
} else {
    console.log("Você está dentro do limite de velocidade.")
}