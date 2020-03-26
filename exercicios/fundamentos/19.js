function lanche(codigo, quantidade) {
    switch(codigo) {
        case 100:
            console.log(`Cachorro quente: R$ ${quantidade * 3},00`)
            break
        case 200:
            console.log(`Hambúrger simples: R$ ${quantidade * 4},00`)
            break
        case 300:
            console.log(`Cheeseburger: R$ ${quantidade * 5.5},00`)
            break
        case 400:
            console.log(`Bauru: R$ ${quantidade * 7.5},00`)
            break
        case 500:
            console.log(`Refrigerante: R$ ${quantidade * 3.5},00`)
            break
        case 600:
            console.log(`Suco: R$ ${quantidade * 2.8},00`)
            break
        default:
            console.log('Produto não existente')
    }
}

lanche(200, 3)