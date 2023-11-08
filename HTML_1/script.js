let currentResult = '';
let operator = '';
let previousResult = 0;

function appendNumber(number) {
    currentResult += number;
    updateResult();
}

function setOperator(op) {
    operator = op;
    previousResult = parseFloat(currentResult);
    currentResult = '';
}

function calculateResult() {
    if (operator === '+') {
        currentResult = previousResult + parseFloat(currentResult);
    } else if (operator === '-') {
        currentResult = previousResult - parseFloat(currentResult);
    } else if (operator === '*') {
        currentResult = previousResult * parseFloat(currentResult);
    } else if (operator === '/') {
        currentResult = previousResult / parseFloat(currentResult);
    }

    operator = '';
    updateResult();
}

function clearResult() {
    currentResult = '';
    operator = '';
    previousResult = 0;
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentResult;
}
