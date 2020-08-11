function gerarNumerosEntre(min, max) {
  if(min > max) [max, min] = [min, max]

  return new Promise(resolve => {
    const fator = (max - min + 1)
    const aleatorio = parseInt(Math.random() * fator) + min

    resolve(aleatorio)
  })
}

gerarNumerosEntre(10, 30).then(console.log)