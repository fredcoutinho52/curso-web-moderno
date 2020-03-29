function multiplica(vetor, numero) {
    let resultado = []

    vetor.map(item => {
        resultado.push(item * numero)
    })

    return resultado
}

function multiplica2(vetor, numero) {
    let resultado = []

    vetor.map(item => {
        if(item > 5) {
            resultado.push(item * numero)
        }
    })

    return resultado
}

const resultado = multiplica([6, 2, 8, 4, 5], 5)
console.log(resultado)

const resultado2 = multiplica2([6, 2, 8, 4, 5], 5)
console.log(resultado2)