const path = require('path')

// Base filename


console.log(__filename)

console.log(path.basename(__filename))

console.log(path.basename(__dirname))

console.log(path.parse(__dirname))

console.log(path.parse(__filename))

// Concatenate 

console.log(path.join(__dirname, 'test', 'index.html'))
