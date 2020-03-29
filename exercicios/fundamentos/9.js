function proximoMultiplo5(valor) {
    while(valor % 5 !== 0) {
        valor++
    }

    return valor
}

function notas(nota) {
    let situacao = ''

    if(nota >= 38) {
        let multiplo5 = proximoMultiplo5(nota)

        if(multiplo5 - nota < 3) {
            nota = multiplo5
            situacao = 'APROVADO'
        } else {
            situacao = 'APROVADO'
        }
    } else {
        situacao = 'REPROVADO'
    }

    console.log(`Nota: ${nota}`)
    console.log(`Situação: ${situacao}`)
}

notas(84)