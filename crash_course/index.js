// // Common JS way
// const Person = require('./person')

// // ES6 way
// import Person from './person'

// const per1 = new Person("Sonal", 29)

// console.log(per1.greeting())

// const Logger = require('./logger')

// const logger = new Logger()

// logger.on('message', data => console.log('Called Listener', data))

// logger.log('Hello World')


const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/api/users' || req.url === '/api/users.json'){
    //     const users = [
    //         {name: 'Pavan', age: 39},
    //         {name: 'Gauri', age: 9},
    //         {name: 'Sonal', age: 31}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }
})

const PORT = process.env.POST || 5000

server.listen(PORT, () => console.log(`Server running on ${PORT}`));



