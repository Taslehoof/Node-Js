const http = require('http')


const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.write('Welcome to the server')
        return res.end()
    }
    
    if(req.url === '/about'){
        
        // Task
        for(let i = 0; i<100000; i++){
            console.log(Math.random() * i)
        }
 
      res.write('About page')
        return res.end()
    }


})

server.listen(3000)
console.log('Server on port 3000')
