const {readFile} = require('fs')

readFile('./data/first.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }

    console.log(data)
})
