function media(codigo, notas) {
    let maior = Math.max(...notas)
    let soma = 0

    notas.map(nota => {
        if(nota === maior) {
            soma += nota * 4
        } else {
            soma += nota * 3
        }
    })

    let mediaPonderada = soma / 10

    console.log(`Código do aluno: ${codigo}`)
    console.log(`Notas: ${notas}`)
    console.log(`Média: ${mediaPonderada}`)
    
    if(mediaPonderada >= 5) {
        console.log('Situação: APROVADO')
    } else {
        console.log('Situação: REPROVADO')
    }
}

const notas = [6, 4, 9]
media(2, notas)