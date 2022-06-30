const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a -b;
};

const sum = function(arr) {
	const sum = arr.reduce((sum, number) => sum += number, 0);
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((multiplication, number) => multiplication *= number, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a <= 1)
    return 1;

    return a * factorial(--a);
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
