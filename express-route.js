var express = require('express');
var http = require('http');
var app = express();

app.get ('/', function(request, response) {
    response.end("Welcome to the my home page");
});

app.get ('/about', function(request, response) {
    response.end("Welcome to the about page");
});

app.get ('/weather', function(request, response) {
    response.end("It's sunny");
});

app.get ('/hello/:who/:city/:country', function(request, response) {
    response.end("Hello, " + request.params.who + " from " + request.params.city +", " + request.params.country);
});

app.get ('/products/:type/:id', function(request, response) {
    if (request.params.type ==1) {
        response.send("<h1>Dresses category<h1> Product Id :" + request.params.id);
    }
    else if (request.params.type ==2) {
        response.send("<h1>Guitar category<h1> Product Id :" + request.params.id);
    }
    else if (request.params.type ==3) {
        response.send("<h1>Furniture category<h1> Product Id :" + request.params.id);
    }
    else {
        response.send("<h1>Default Category<h1>");
    }

});

app.use (function(request, response) {
    response.statusCode = 404
    response.end("404 error");
});

http.createServer(app).listen(5000);