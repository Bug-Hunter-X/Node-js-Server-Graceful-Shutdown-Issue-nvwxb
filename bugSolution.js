const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isClosing = false;

const shutdown = () => {
  if (isClosing) return; // already shutting down
  isClosing = true;
  server.close(() => {
    console.log('Server closed');
    process.exit(0); 
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Example of asynchronous operation that needs to be considered during shutdown
setTimeout(() => {
  console.log('Asynchronous operation completed');
}, 5000);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// Adding server.on('close', ...) ensures the server has fully stopped before exiting.