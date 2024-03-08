
const repeatString = function(text, times) {

    if (times<0) return "ERROR";

    let result="";

    while (times>0) {
        result+=text;
        times--;
    }
    return result;

};


// Do not edit below this line
module.exports = repeatString;
