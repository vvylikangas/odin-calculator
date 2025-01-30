const add = (x, y) => {
  return x + y;
};
const subtract = (x, y) => {
  return x - y;
};
const multiply = (x, y) => {
  return x * y;
};
const divide = (x, y) => {
  return x / y;
};

let num1;
let num2;
let operator;

const operate = (operator, x, y) => {
  switch (operator) {
    case '+':
      add(x, y);
    case '-':
      subtract(x, y);
    case '*':
      multiply(x, y);
    case '/':
      divide(x, y);
  }
};
