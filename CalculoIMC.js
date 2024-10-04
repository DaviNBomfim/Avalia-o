function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        return -1
    } else if (peso == null || altura == null) {
        return -1
    } else {
        return peso / (altura * altura);
    }
}

module.exports = { calcularIMC };