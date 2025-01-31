let num1;
let num2;
let operator;
let isSecondOperator = false;

const numpadContainer = document.getElementById('numpad');
const operatorsContainer = document.getElementById('operators');
const equalsButton = document.getElementById('equals-btn');
const clearButton = document.getElementById('clear');
const operatorElement = document.getElementById('operator');
const operand1Element = document.getElementById('firstNum');
const operand2Element = document.getElementById('secondNum');
const resultElement = document.getElementById('result');

const operations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => (y != 0 ? x / y : 'Error: division by zero'),
};

const operate = (operator, x, y) => {
  return operations[operator] ? operations[operator](x, y) : 'Invalid operator';
};

numpadContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const num = event.target.dataset.value;
    if (!isSecondOperator) {
      operand1Element.textContent += num;
      num1 = Number(operand1Element.textContent);
    } else {
      operand2Element.textContent += num;
      num2 = Number(operand2Element.textContent);
    }
  }
});

operatorsContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    operatorElement.textContent = event.target.innerText;
    operator = event.target.dataset.value;
    isSecondOperator = true;
  }
});

equalsButton.addEventListener('click', (event) => {
  const result = operate(operator, num1, num2);
  resultElement.textContent = result;
});

clearButton.addEventListener('click', (event) => {
  operand1Element.textContent = '';
  num1 = 0;
  operand2Element.textContent = '';
  num2 = 0;
  resultElement.textContent = '';
  result = 0;
  operatorElement.textContent = '';
  operator = '';
  isSecondOperator = false;
});
