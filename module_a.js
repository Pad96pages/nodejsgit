exports.name =  "Ram";
exports.data = "Is in my heart";

var privateVariable = 9;

exports.getPrivate = function(){
    return privateVariable;
}