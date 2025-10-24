/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const prompt = require("prompt-sync")()

let a = Number(prompt("Digite o comprimento do primeiro segmento: "))
let b = Number(prompt("Digite o comprimento do segundo segmento: "))
let c = Number(prompt("Digite o comprimento do terceiro segmento: "))

if (a < b + c && b < a + c && c < a + b) {
    console.log("Os segmentos podem formar um triângulo.")
} else {
    console.log("Os segmentos não podem formar um triângulo.")
}