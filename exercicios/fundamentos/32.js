const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let soma = 0
let media = 0

numeros.map(numero => {
    soma += numero
})

media = soma / numeros.length

console.log(`A média aritmética dos números do vetos é ${media}`)