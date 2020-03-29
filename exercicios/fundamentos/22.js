function anuidade(mes, valor) {
    let montante

    if(mes === 1) {
        montante = valor
    } else {
        montante = valor * ((1 + 0.05) ** mes)
    }

    return montante
}

const resultado = anuidade(2, 200)
console.log(`O valor total a pagar é R$${resultado}`)