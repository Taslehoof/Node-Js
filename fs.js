const fs = require('fs')

const first = fs.readFileSync('./data/first.txt','utf8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

//fs.writeFileSync('./data/third.txt','este es el tercer archivo')

const title = 'este es el contenido del documento'

fs.writeFileSync('./data/fourth.txt',title)
