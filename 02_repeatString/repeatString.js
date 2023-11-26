const repeatString = function(word, times) {
    let result = "";
    if (times>0){
        for(let i =0; i<times; i++)
        {
            result+=word;
        }
        return result;

    }
    else if(times==0){
        return "";
    }
    else{
        return "ERROR";
    }
    
  
};

// Do not edit below this line
module.exports = repeatString;
