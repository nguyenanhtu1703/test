var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("hello world");
}).listen(8080);
console.log("server is serving at http://localhost:8080");