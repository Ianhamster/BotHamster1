const axios = require('axios')

const letras = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('Por favor, insira o texto. ') }
        url = `http://scrap.terhambar.com/lirik?word=${teks}`
        axios.get(url)
            .then(res => {
                const { letras: hasil } = res.data.result
                resolve({ hasil })
             })
             .catch(err => {
                 reject('sepertinya error.')
             })
    })
}

module.exports = lirik
