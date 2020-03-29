function conceito(notas) {
    let resultados = []

    notas.map(nota => {
        if(nota >= 0 && nota <= 4.9) {
            resultados.push('D')
        } else if(nota >= 5 && nota <= 6.9) {
            resultados.push('C')
        } else if(nota >= 7 && nota <= 8.9) {
            resultados.push('B')
        } else if(nota >= 9 && nota <= 10) {
            resultados.push('A')
        }
    })

    return resultados
}

const resultado = conceito([3, 5, 7.5, 9.8])
console.log(resultado)