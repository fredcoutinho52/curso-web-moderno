const fs = require('fs')
const path = require('path')

function retornaConteudo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString())
    })
  })
}

const caminho = path.join(__dirname, 'dados.txt')
retornaConteudo(caminho).then(console.log)