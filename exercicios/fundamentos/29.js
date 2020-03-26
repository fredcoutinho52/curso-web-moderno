const numeros = [12, 3, 4, 11, 31, 32, 27, 15, 16, 19, 20, 55]

let dentro = 0
let fora = 0

numeros.map(numero => {
    if(numero >= 10 && numero <= 20) {
        dentro++
    } else {
        fora++
    }
})

console.log(`O vetor possui ${dentro} números entre 10 e 20, e ${fora} números fora desse intervalo`)