let http= require('http');

const server=http.createServer(function(req,res){

    res.write("<h1>Hello This is My First Server Created</h1>");
    res.end();
})

server.listen(8888)