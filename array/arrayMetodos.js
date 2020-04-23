const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o último elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona dois elementos na posição 2
console.log(pilotos)

pilotos.splice(3, 1)  // remove um elemento da posição 3
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array a partir do índice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // o 4 não entra
console.log(algunsPilotos2)