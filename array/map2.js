const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const converteJSON = e => JSON.parse(e)
const pegaPrecos = e => e["preco"]

const precos = carrinho.map(converteJSON).map(pegaPrecos)
console.log(precos)