/**
 * Created by dmitr_000 on 15.02.2016.
 */

var http = require('http');
var log = require("winston");
var fs = require("fs");

var server = new http.Server();

function sendFile(file, res) {
    file.pipe(res);
    res.on("close", function(){
        file.destroy();
    })
}

server.on("request", function(req, res){
    if (req.url == "/index"){
        var file = fs.ReadStream("./public/html/index.html");
        sendFile(file, res);
    } else {
        res.end("error");
    }
});

server.listen(8080);
