console.log(soma(3, 4))

// function declaration (forma tradicional)
function soma(x, y) {
    return x + y
}

// function expression (atribuir a uma variável)
const sub = function(x, y) {
    return x - y
}

console.log(sub(3, 4)) // não é possível chamar antes da função

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4)) // não é possível chamar antes da função