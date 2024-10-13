let display = document.querySelector('.display');
let currentInput = '';
let operator = '';
let operand1 = null;

function clearDisplay() {
  currentInput = '';
  operator = '';
  operand1 = null;
  display.textContent = '0';
}

function appendNumber(number) {
  if (currentInput === '' && number === '.') {
    currentInput = '0';
  }
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (operand1 === null) {
    operand1 = parseFloat(currentInput);
    operator = op;
    currentInput = '';
  } else if (operator !== '' && currentInput !== '') {
    calculate();
    operator = op;
  }
}

function calculate() {
  if (operator === '' || currentInput === '') return;

  let operand2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    case '%':
      result = operand1 % operand2;
      break;
    case '^':
      result = Math.pow(operand1, operand2);
      break;
    default:
      return;
  }

  display.textContent = result;
  currentInput = result.toString();
  operator = '';
  operand1 = result;
}
