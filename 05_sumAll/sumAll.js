const sumAll = function(a,b) {

    if (!Number.isInteger(a)||!Number.isInteger(b)) return "ERROR"; //non number parameters
    if ((a<0)||(b<0)) return "ERROR"; //positive numbers

    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
      }
 
    let sum =0;

    for (let i =a;i<=b;i++) {
        sum+=i;
    }

    return sum;
};

console.log(sumAll(-40,10));

// Do not edit below this line
module.exports = sumAll;
