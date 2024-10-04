const { describe, test, expect } = require('@jest/globals')
const { calcularIMC } = require('../CalculoIMC');


describe('Teste de IMC', () => {
    test('Deve retornar o valor correto', () => {
        const peso = 70;
        const altura = 1.75;
        const IMC = calcularIMC(peso, altura);
        expect(IMC).toBeCloseTo(22.86, 2);
    });
});

describe('Peso igual a 0', () => {
    test('Deve retornar -1 se o peso for zero', () => {
        const peso = 0;
        const altura = 1.60;
        const IMC = calcularIMC(peso, altura);
        expect(IMC).toBe(-1);
    });
});

describe('Altura igual a 0', () => {
    test('Deve retornar -1 se altura for zero', () => {
        const peso = 100;
        const altura = 0;
        const IMC = calcularIMC(peso, altura);
        expect(IMC).toBe(-1);
    });
});

describe('Deve retornar a classificação certa', () => {
    test('Retornar classificação certa', () => {
        const peso = 70;
        const altura = 1.75;
        const IMC = calcularIMC(peso, altura);
        let classificação = '';

        if (IMC < 18.5) {
            classificação = "Magreza"
        } else if (IMC >= 18.5 && IMC < 24.9) {
            classificação = "Normal"
        } else if (IMC >= 25 && IMC < 29.9) {
            classificação = "Sobrepeso"
        } else if (IMC >= 30 && IMC < 34.9) {
            classificação = "Obesidade grau 1"
        } else if (IMC >= 35 && IMC < 39.9) {
            classificação = "Obesidade grau 2"
        } else {
            classificação = "Obesidade grau 3"
        }

        expect(classificação).toBe('Normal');
    });
});