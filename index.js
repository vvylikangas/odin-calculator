const operations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => (y != 0 ? x / y : 'Error: division by zero'),
};

let num1;
let num2;
let operator;

const operate = (operator, x, y) => {
  return operations[operator] ? operations[operator](x, y) : 'Invalid operator';
};
