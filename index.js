const operations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => (y != 0 ? x / y : 'Error: division by zero'),
};

let num1;
let num2;
const numpad = document.getElementById('numpad');
const operators = document.getElementById('operators');
const operator = document.getElementById('operator');
const operand1 = document.getElementById('firstNum');
const operand2 = document.getElementById('secondNum');
let isSecondOperator = false;

const operate = (operator, x, y) => {
  return operations[operator] ? operations[operator](x, y) : 'Invalid operator';
};

numpad.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const num = event.target.dataset.value;
    if (!isSecondOperator) {
      operand1.textContent += num;
      num1 = Number(operand1.textContent);
    } else {
      operand2.textContent += num;
      num2 = Number(operand2.textContent);
    }
  }
});
operators.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    operator.textContent = event.target.dataset.value;
    isSecondOperator = true;
  }
});
