function impares(inicio, fim) {
    for(let i = inicio; i <= fim; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    }
}

impares(2, 80)