const add = function(x, y) {
  return x + y;  
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  // Initial value of 0 added to account for empty array
  return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr);
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(n) {
  let acc = 1;
  for (let i = 1; i <= n; i++) {
    acc *= i;
  }
  return acc;
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
