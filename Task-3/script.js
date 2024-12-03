let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const display = document.getElementById('display');


function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return; // Prevent multiple decimals
    currentOperand += number;
    updateDisplay();
}


function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculateResult();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}


function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}


function calculateResult() {
    let result;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}


function updateDisplay() {
    display.innerText = currentOperand || '0';
}
