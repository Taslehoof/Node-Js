const {writeFile} = require ('fs/promises')

const createBigFile = async () => {
    await writeFile('./data/bigFile.txt', 'Hello world'.repeat(1000000))
}

createBigFile()
