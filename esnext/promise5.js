function funcionarOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceDeErro) {
      reject('Ocorreu um erro');
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao('Testando...', 0.5)
  .then(console.log)
  .catch(console.log)
  .then(() => console.log('Fim'))