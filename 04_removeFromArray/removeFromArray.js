const removeFromArray = function(initial,...params) {
    const paramsArr = Array.from(params);
    const initialArr = Array.from(initial);
    let finalArr=[];

    outer: for (i=0;i<initialArr.length;i++) {
        for (j=0;j<paramsArr.length;j++) {
            if (initialArr[i]===paramsArr[j]) {
                continue outer;
            }
        }

        finalArr.push(initialArr[i]);
      }

      return finalArr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
