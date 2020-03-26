function imprimir(valor) {
    let novoValor = valor.toFixed(2)
    novoValor = novoValor.toString().replace('.', ',')
    
    return novoValor
}

const resultado = imprimir(0.1 + 0.2)
console.log(resultado)