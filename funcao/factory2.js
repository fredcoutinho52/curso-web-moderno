// Factory passando parâmetros
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Arroz', 23))
console.log(criarProduto('Feijão', 17))
console.log(criarProduto('Caneta', 4))