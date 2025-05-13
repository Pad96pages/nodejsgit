var http = require ('http');

http.createServer(function(req, res){

    var url=req.url;
    if(url== '/about'){
        res.write("Welcome to about us page");
        res.end();
    }
    else if(url==='/contact'){
        res.write("Welcome to contact us page");
        res.end();
    }
    else if(url==='/faq'){
        res.write("Welcome to FAQ page");
        res.end();
    }
    else{
        res.write("This is the default Home Page");
        res.end();
    }
    console.log('Server launched on port no.8000');

}).listen(8000);