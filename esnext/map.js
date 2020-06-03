const techs = new Map()
techs.set('react', { framework: false })
techs.set('angular', { framework: true })

console.log(techs)
console.log(techs.react) // undefined
console.log(techs.get('react'))
console.log(techs.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

console.log(chavesVariadas)

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
console.log(chavesVariadas)
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)