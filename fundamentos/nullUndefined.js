let valor // não inicializada
console.log(valor)

valor = null // ausẽncia de valor
console.log(valor)

// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // melhor forma de excluir um atributo
console.log(produto.preco)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)