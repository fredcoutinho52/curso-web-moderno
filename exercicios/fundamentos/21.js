function plano(idade) {
    let valor = 0
    if(idade < 10) {
        valor = 180
    } else if(idade >= 10 && idade <= 30) {
        valor = 150
    } else if(idade > 30 && idade <= 60) {
        valor = 195
    } else {
        valor = 230
    }

    return valor
}

const resultado = plano(67)
console.log(`Valor a ser pago pelo plano de saúde: R$ ${resultado},00`)