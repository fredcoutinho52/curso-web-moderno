function progressaoAritmetica(termo, a1, razao) {
    let an = a1 + ((termo - 1) * razao)
    let soma = termo * ((a1 + an) / 2)

    console.log(`O ${termo}º termo é ${an}`)
    console.log(`A soma dos elementos é ${soma}`)
}

function progressaoGeometrica(termo, a1, razao) {
    let an = a1 * (razao**(termo - 1))
    let soma = (a1 * ((razao**termo) - 1)) / (razao - 1)

    console.log(`O ${termo}º termo é ${an}`)
    console.log(`A soma dos elementos é ${soma}`)
}

progressaoAritmetica(20, 1, 2)
progressaoGeometrica(6, 2, 3)