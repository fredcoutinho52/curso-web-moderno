function bissexto(ano) {
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        return true
    } else {
        return false
    }
}

const resultado = bissexto(2015)
console.log(resultado)