function bhaskara(a, b, c) {
    const delta = (b**2) - (4 * a * c)
    console.log(delta)

    const x1 = ((-b) + (Math.sqrt(delta))) / (2 * a)
    const x2 = ((-b) - (Math.sqrt(delta))) / (2 * a)

    return [x1, x2]
}

const resultado = bhaskara(-3, -5, 12)
console.log(resultado)