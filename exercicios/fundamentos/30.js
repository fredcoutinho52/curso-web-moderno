const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

let maior = 0
let menor = 0

numeros.map((numero, indice) => {
    if(indice === 0) {
        maior = numero
        menor = numero
    } else {
        if(numero > maior) {
            maior = numero
        } else if(numero < menor) {
            menor = numero
        }
    }
})

console.log(`O maior número do vetor é ${maior}`)
console.log(`O menor número do vetor é ${menor}`)