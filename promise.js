const { throws } = require('assert')
const {readFile} = require('fs')


const getText = (pathFile) =>{
    //Promesas en funcion de callbacks
    return new Promise(function (resolve, reject){
        readFile(pathFile,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })

}

//UNA MEJOR FORMA DE ESCRIBIR PROMESAS
//getText('./data/fourth.txt')
//    .then((result) => console.log(result))
//    .then(() => getText('./data/first.txt'))
//    .then(result => console.log(result))
//    .catch(error => console.log(error))


//async y await
async function read() {
    try {
        const result = await getText('./data/first.txt');
        console.log(result);
        const result2 = await getText('./data/second.txt');
        console.log(result2);
        const result3 = await getText('./data/third.txt');
        console.log(result3);
        const result4 = await getText('./data/fourth.txt');
        console.log(result4);
        //con esto puedo disparar un error de manera manual
        ////con esto puedo disparar un error de manera manual
        throw new Error('esto es un error que no se esperaba')
    } catch(error) {
        console.log(error)
    }
}

read()
