// This HTTP web server that responds with a string containing the request path and method.

const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function(request, response) {
  // console.log('In requestHandler'); // new line
  // response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
  // Routing
  if (request.url === "/") {
    response.end("Welcome!");
  } else if (request.url === "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("404 Page Not Found");
  }


  
};

const server = http.createServer(requestHandler);
console.log('Server created'); // new line

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

console.log('Last line (after .listen call)'); // NEW LINE





