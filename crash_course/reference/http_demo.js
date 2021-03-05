const http = require('http')
// Create the server
http.createServer((req, res) => {
    res.write('Hello Word!')
    res.end()
}).listen(5000, () => console.log('Server running...'))