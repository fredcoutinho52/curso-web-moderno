function troca(vetor1, vetor2) {
    console.log('Antes da troca')
    console.log(`Vetor 1 = ${vetor1}`)
    console.log(`Vetor 2 = ${vetor2}`)
    
    for(let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }

    console.log('Depois da troca')
    console.log(`Vetor 1 = ${vetor1}`)
    console.log(`Vetor 2 = ${vetor2}`)
}

const vetor1 = [1, 2, 3]
const vetor2 = [4, 5, 6]
troca(vetor1, vetor2)

// let x = 5
// let y = 3

// x = x + y // x = 8
// y = x - y // y = 5
// x = x - y // x = 3

// console.log(`x = ${x}`)
// console.log(`y = ${y}`)