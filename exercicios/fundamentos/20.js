function notas(valor) {
    let valorRestante = valor
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0

    while(valorRestante !== 0) {
        if(valorRestante >= 100) {
            notas100 = Math.floor(valorRestante / 100)
            valorRestante -= (notas100 * 100)
        } else if(valorRestante < 100 && valorRestante >= 50) {
            notas50 = Math.floor(valorRestante / 50)
            valorRestante -= (notas50 * 50)
        } else if(valorRestante < 50 && valorRestante >= 10) {
            notas10 = Math.floor(valorRestante / 10)
            valorRestante -= (notas10 * 10)
        } else if(valorRestante < 10 && valorRestante >= 5) {
            notas5 = Math.floor(valorRestante / 5)
            valorRestante -= (notas5 * 5)
        } else if(valorRestante < 5) {
            for(let i = 0; i < valorRestante; i++) {
                notas1++
            }
            valorRestante = 0
        }
    }
    
    console.log(`${notas100} notas de R$100`)
    console.log(`${notas50} notas de R$50`)
    console.log(`${notas10} notas de R$10`)
    console.log(`${notas5} notas de R$5`)
    console.log(`${notas1} moedas de R$1`)
}

notas(254)