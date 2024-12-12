const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Uncommon bug:  The server might not shutdown gracefully if there is a pending asynchronous operation when the server is closed using server.close().
//The pending asynchronous operation might prevent the server from exiting completely, leading to resource leaks. 
//For example, an unhandled promise rejection or a never-resolved setTimeout can lead to this issue.