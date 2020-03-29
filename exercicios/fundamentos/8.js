function pontuacao(pontos) {
    let recorde = 0
    let passou = 0
    let pior = 0

    pontos.map((ponto, indice) => {
        if(indice === 0 ) {
            recorde = ponto
            pior = ponto
        } else if(ponto > recorde) {
            recorde = ponto
            passou++
        } else if(ponto < pior) {
            pior = ponto
        }
    })

    return [passou, pontos.indexOf(pior)]
}

const listaPontos = [10, 20, 20, 8, 25, 3, 0, 30, 1]

const resultado =  pontuacao(listaPontos)
console.log(resultado)