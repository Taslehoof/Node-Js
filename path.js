const path = require('path')

const FilePath = path.join('/public','dist', '/style','main.css')

console.log(FilePath)
console.log(path.basename(FilePath))
console.log(path.dirname(FilePath))
console.log(path.parse(FilePath))
console.log(path.resolve('dist'))
