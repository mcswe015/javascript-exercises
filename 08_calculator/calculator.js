const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let sumAll=0;
  
  array.forEach(element => {
    sumAll+=element;
    
  });
  return sumAll;
	
};

const multiply = function(array) {
  let multAll=1;
  array.forEach(element=>{
    multAll*=element;
  })
  return multAll;

};

const power = function(num, power) {
  let powerOf=1;
  for(let i=1;i<=power;i++){
    powerOf*=num;
  }
  return powerOf;

	
};

const factorial = function(num) {
  let fact=1;
  for(let i=1; i<=num;i++){
    fact*=i;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
