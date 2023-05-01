let http = require('http');
let fs= require('fs')


let server= http.createServer(function(req,res){

    fs.readFile('appendFileText.txt',function(err,data){

        res.write(data);
        res.end();
    })
})

server.listen(4004);