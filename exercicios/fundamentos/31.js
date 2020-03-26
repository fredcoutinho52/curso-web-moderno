const numeros = [2, 4, 1, 7, -2, 4, -3, -9]

let quantidade = 0

numeros.map(numero => {
    if(numero < 0) {
        quantidade++
    }
})

console.log(`A quantidade de números negativos no vetor é ${quantidade}`)