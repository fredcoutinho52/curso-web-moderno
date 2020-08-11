function esperarPor(tempo=2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Executando promise...')

      resolve()
    }, tempo);
  })
}

function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornarValor();

  await esperarPor(15000);
  console.log(`Async/Await ${valor}...`);

  await esperarPor(15000);
  console.log(`Async/Await ${valor + 1}...`);

  await esperarPor(15000);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

executar().then(console.log);