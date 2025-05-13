var fs = require('fs');
var data = '';

var readStream = fs.createReadStream('mylife.txt');

readStream.setEncoding('UTF-8');

readStream.on('data',function(d){
    console.log(data +=d);

})
console.log("program ended");