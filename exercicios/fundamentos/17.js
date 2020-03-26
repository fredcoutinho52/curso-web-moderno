function aumento(plano, salario) {
    switch(plano) {
        case 'A':
            console.log(`Salário atual: R$${salario}`)
            console.log(`Novo salário: R$${salario + (salario * 0.1)}`)
            break
        case 'B':
            console.log(`Salário atual: R$${salario}`)
            console.log(`Novo salário: R$${salario + (salario * 0.15)}`)
            break
        case 'C':
            console.log(`Salário atual: R$${salario}`)
            console.log(`Novo salário: R$${salario + (salario * 0.2)}`)
            break
        default:
            console.log('Plano inválido')
    }
}

aumento('C', 100)