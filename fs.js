const { error } = require('console')
const fs = require('fs')

// CODIGO SYNCRONO

//const first = fs.readFileSync('./data/first.txt','utf8')
//const second = fs.readFileSync('./data/second.txt')
//
//console.log(first)
//console.log(second.toString())

//fs.writeFileSync('./data/third.txt','este es el tercer archivo')

//const title = 'este contenido ha sido añadido'
//
//fs.writeFileSync('./data/fourth.txt',title, {
//   flag: 'a'
//})

//CODIGO ASYNCRONO

fs.readFile('./data/first.txt', (error, data) => {
    if(error){
        console.log(error)
    }
    console.log(data.toString())
})
