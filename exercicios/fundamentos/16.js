function calculadora(num1, op, num2) {
    switch(op) {
        case '+':
            console.log(`A soma é ${num1 + num2}`)
            break
        case '-':
            console.log(`A subtração é ${num1 - num2}`)
            break
        case '*':
            console.log(`A multiplicação é ${num1 * num2}`)
            break
        case '/':
            console.log(`A divisão é ${num1 / num2}`)
            break
        default:
            console.log('Operação inválida')
    }
}

calculadora(3, '*', 2)