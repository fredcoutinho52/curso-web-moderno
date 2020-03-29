function comparacao(palavra1, palavra2) {
    let palavraMin1 = [...palavra1.toLowerCase()]
    let palavraMin2 = [...palavra2.toLowerCase()]

    let possui = true

    palavraMin1.map(letra => {
        if(!palavraMin2.includes(letra)) {
            possui = false
        }
    })

    return possui
}

const resultado = comparacao('testa', 'TESTE')
console.log(resultado)