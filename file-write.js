var fs = require('fs');
var data = 'something to write in the file';

var writeStream = fs.createWriteStream('mylife.txt');
writeStream.write(data);
writeStream.end();

writeStream.on('finish', function(){
    console.log("Write completed");
});
writeStream.on('error', function(){
    console.log(error.stack);
});
console.log("Program ended");