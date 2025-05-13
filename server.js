var http = require('http');
http.createServer(function (request, response){
    response.writeHead(200, {'content-type':'text/html'});
    response.end("Hello welcome  <b style='color:red;text-decoration:underline'>nodejs<b>");

}).listen(8000);
console.log("Node server launched succesfully");