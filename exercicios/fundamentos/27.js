function crescimento(alt1, cresc1, alt2, cresc2) {
    let anos = 0

    while(alt1 != alt2) {
        alt1 += cresc1
        alt2 += cresc2
        anos++
    }

    return anos
}

const resultado = crescimento(154, 3, 158, 2)
console.log(`As crianças terão a mesma altura em ${resultado} anos`)