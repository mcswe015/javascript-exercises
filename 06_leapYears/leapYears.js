const leapYears = function(year) {
    /*if(year%400==0||(year%10!=0 && year%4==0)){
        return true;
    }
    return false;*/

    return year%400==0||(year%10!=0 && year%4==0);

};

// Do not edit below this line
module.exports = leapYears;
