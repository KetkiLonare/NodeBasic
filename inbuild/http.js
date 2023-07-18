const http = require('http');


const server = http.createServer((req, res) => {
    res.write(`<h1>Hello You Are connected to database`);
    // res.send('Hello You Are connected to database')
    res.end()
})

server.listen(3000)