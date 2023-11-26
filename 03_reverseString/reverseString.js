const reverseString = function(input) {
    let result ="";
    let inputArray= Array.from(input);
    for(let i =inputArray.length-1;i>=0;i--){
        result+=inputArray[i]
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
