function jurosSimples(capital, juros, tempo) {
    const montante = capital * (1 + ((juros / 100) * tempo))

    return montante
}

function jurosComposto(capital, juros, tempo) {
    const montante = capital * ((1 + (juros / 100)) ** tempo)
    
    return montante
}

const resultadoSimples = jurosSimples(1000, 60, 3)
console.log(resultadoSimples)

const resultadoComposto = jurosComposto(1000, 60, 3)
console.log(resultadoComposto)