const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 499.9
prod1['loja'] = 'americanas'

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.9,
    obj: {
        chave: 'valor'
    }
}

console.log(typeof prod2)