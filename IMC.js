import { calcularIMC } from './CalculoIMC.js'

function main() {
    const peso = parseFloat(prompt("Digite o peso - KG: "));
    const altura = parseFloat(prompt("Digite o altura - M: "));

    const imc = calcularIMC(peso, altura);

    const classificação = "";

    if (imc < 18.5) {
        classificação = "Magreza"
    } else if (imc >= 18.5 && imc < 24.9) {
        classificação = "Normal"
    } else if (imc >= 25 && imc < 29.9) {
        classificação = "Sobrepeso"
    } else if (imc >= 30 && imc < 34.9) {
        classificação = "Obesidade grau 1"
    } else if (imc >= 35 && imc < 39.9) {
        classificação = "Obesidade grau 2"
    } else {
        classificação = "Obesidade grau 3"
    }

    alert("Seu IMC é: " + imc.toFixed(2) + ". Classificação: " + classificação)
}