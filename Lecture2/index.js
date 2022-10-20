const ip = require('ip');
const http = require('http');

console.log('Hello world');

const hostname = '127.0.0.1';
const port = 3000;


console.log(ip.address());

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
  
