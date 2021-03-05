const fs = require('fs')
const path = require('path')

// Create Folder
fs.mkdir(path.join(__dirname, '/test_folder'), {}, (err) => {
    if(err) throw err
    console.log('Folder Created...')
})

// Create and Write to Files.

fs.writeFile(path.join(__dirname, '/test_folder', 'hello.txt'), "Hello World!", (err) => {
    if(err) throw err
    console.log('Write to File Created...')
})

//  Append File
fs.appendFile(path.join(__dirname, '/test_folder', 'hello.txt'), " Love it World!", (err) => {
    if(err) throw err
    console.log('Write to File Created...')
})

// Read File
fs.readFile(path.join(__dirname, '/test_folder', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
})

// Read File Buffer
fs.readFile(path.join(__dirname, '/test_folder', 'hello.txt'), (err, data) => {
    if(err) throw err
    console.log(data.toString())
})
