function gerarNumerosEntre(min, max, proibidos) {
  if(min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = (max - min + 1);
    const aleatorio = parseInt(Math.random() * fator) + min;

    if(proibidos.includes(aleatorio)) {
      reject('Número repetido');
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(quantidade) {
  try {
    const numeros = [];
    for(let _ of Array(quantidade).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }

    return numeros;
  } catch(e) {
    throw 'Não deu';
  }
}

gerarMegaSena(8)
  .then(console.log)
  .catch(console.log);