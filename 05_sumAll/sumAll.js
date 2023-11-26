const sumAll = function(a, b) {
    let sum=0;
    let high=b;
    let low=a;
    if(a<0||b<0||typeof(a)!="number"||typeof(b)!="number"){
        return "ERROR";
    }
    if(a>b){
        high =a;
        low=b;
     }
    for(let i=low;i<=high;i++){
        sum+=i;
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
