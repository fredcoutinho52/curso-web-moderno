const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

vetorAdiciona.map(item => {
    vetorPilha.push(item)
})

console.log(vetorPilha)