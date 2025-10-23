/* Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const prompt = require("prompt-sync")()

let cigarrosPorDia = Number(prompt("Quantos cigarro fuma por dia? "))
let anos = Number(prompt("Há quanto tempo você fuma? "))

let total = cigarrosPorDia * anos * 365 * 10 / 1440

console.log(`Você perdeu ${total.toFixed(0)} dias de vida`)