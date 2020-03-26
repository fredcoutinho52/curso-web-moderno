function triangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3) {
        return 'equilátero'
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return 'isóceles'
    } else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        return 'escaleno'
    }
}

const tipo = triangulo(2, 3, 4)
console.log(tipo)