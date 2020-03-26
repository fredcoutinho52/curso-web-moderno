function carro(tipo) {
    switch(tipo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan':
        case 'moto':
        case 'picape':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

carro('sedan')