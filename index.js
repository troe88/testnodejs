/**
 * Created by dmitr_000 on 15.02.2016.
 */

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world\n');
}).listen(8000, '127.0.0.1');