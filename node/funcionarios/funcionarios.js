const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulheres = e => e.genero === 'F'
    const chinesas = e => e.pais === 'China'
    const salarios = e => e.salario
    
    const totalPessoas = funcionarios.filter(mulheres).filter(chinesas).map(salarios)
    console.log(Math.min(...totalPessoas))
})