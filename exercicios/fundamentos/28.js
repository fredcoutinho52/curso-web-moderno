const numeros = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11]

let pares = 0
let impares = 0

numeros.map(numero => {
    if(numero % 2 === 0) {
        pares++
    } else {
        impares++
    }
})

console.log(`O vetor possui ${pares} números pares e ${impares} números ímpares`)