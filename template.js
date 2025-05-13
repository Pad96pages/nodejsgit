var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//setting template engine
app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var students = [
    {id:1, first_name : 'Sudhir', last_name : 'Batra', email : 'sb@gmail.com'},
    {id:2, first_name : 'Ram', last_name : 'Raghu', email : 'rr@gmail.com'},
    {id:3, first_name : 'Joe', last_name : 'Biden', email : 'jb@gmail.com'},
    {id:4, first_name : 'May', last_name : 'Hay', email : 'mh@gmail.com'}
]


app.get ('/students', function(request, response) {
    response.render('index.ejs',{title:"RBU Students", users: students});
});

http.createServer(app).listen(8000);