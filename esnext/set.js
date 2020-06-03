// não acite repetição e não é indexado
const carros = new Set()
carros.add('Mazda')
carros.add('Palio').add('Corsa').add('McLaren')
carros.add('Bronco')
carros.add('Mazda')

console.log(carros)
console.log(carros.size)
console.log(carros.has('Palio'))
console.log(carros.has('palio'))
carros.delete('Bronco')
console.log(carros.has('Bronco'))

const nomes = ['João', 'Maria', 'Bruxas']
const nomesSet = new Set(nomes)
console.log(nomesSet)