function fatorial(valor) {
    let resultado = 1
    for(let i = valor; i > 0; i--) {
        resultado *= i
    }

    return resultado
}

const resultado = fatorial(6)
console.log(resultado)