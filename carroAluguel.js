/*Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const prompt = require("prompt-sync")()
console.log("Bem-vindo ao sistema de aluguel de carros!")

let tipoCarro = prompt("Digite o tipo de carro (popular/luxo): ").toLowerCase()
let diasAluguel = Number(prompt("Digite a quantidade de dias de aluguel: "))
let kmPercorridos = Number(prompt("Digite a quantidade de Km percorridos: "))

let precoTotal = 0

if (tipoCarro === "popular") {
    precoTotal = diasAluguel * 90
    if (kmPercorridos <= 100) {
        precoTotal += kmPercorridos * 0.2
    } else {
        precoTotal += 100 * 0.2 + (kmPercorridos - 100) * 0.1
    }
} else if (tipoCarro === "luxo") {
    precoTotal = diasAluguel * 150
    if (kmPercorridos <= 200) {
        precoTotal += kmPercorridos * 0.3
    } else {
        precoTotal += 200 * 0.3 + (kmPercorridos - 200) * 0.25
    }
} else {
    console.log("Tipo de carro inválido.")
}

console.log(`O preço total a ser pago é: R$ ${precoTotal.toFixed(2)}`)