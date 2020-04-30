const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

const fragil = e => e.fragil
const caro = e => e.preco > 500

const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)