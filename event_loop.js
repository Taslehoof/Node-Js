const http = require('http')


const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.write('Welcome to the server')
        return res.end()
    }
    
    if(req.url === '/about'){
        res.write('Abou page')
        return res.end()
    }


})

server.listen(3000)
console.log('Server on port 3000')
