const display = document.getElementById('display');

let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
  if (currentInput.length >= 10) return;
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (firstOperand === null && currentInput !== '') {
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
    updateOperationHistory(`${firstOperand} ${op}`);
  } else if (operator && currentInput !== '') {
    calculateResult();
    operator = op;
    updateOperationHistory(`${firstOperand} ${op}`);
  }
}

function appendDecimal(dot) {
  if (!currentInput.includes('.')) {
    currentInput += dot;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  updateDisplay();
  updateOperationHistory('');
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  const secondOperand = parseFloat(currentInput);

  if (isNaN(secondOperand)) return;

  switch (operator) {
    case '+':
      currentInput = (firstOperand + secondOperand).toString();
      break;
    case '-':
      currentInput = (firstOperand - secondOperand).toString();
      break;
    case '*':
      currentInput = (firstOperand * secondOperand).toString();
      break;
    case '/':
      if (secondOperand === 0) {
        alert("Деление на ноль!");
        clearDisplay();
        return;
      }
      currentInput = (firstOperand / secondOperand).toString();
      break;
    default:
      break;
  }

  operator = '';
  firstOperand = null;
  updateDisplay();
  updateOperationHistory('');
}

function updateDisplay() {
  display.value = currentInput || '0';
}

function updateOperationHistory(text) {
  const operationHistory = document.getElementById('operation-history');
  operationHistory.textContent = text || '';
}