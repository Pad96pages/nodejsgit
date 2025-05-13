var express = require('express');
var app = express();

app.use('/',function(req,res){
    res.send('Keep Going');

});
app.listen(9000);
console.log("Server running on part no. 9000");