//import { suma, resta, multi, divi } from './operaciones.js';
 const suma = (x, y) => x + y;
 const resta = (x, y) => x - y;
 const multi = (x, y) => x * y;
 const divi = (x, y) => {
    if (y <= 0) {
        return "error";
    } else {
        return x / y;
    }
};

let displayValue = '0';
let currentOperator = null;
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (value == '0' && displayValue == '0') {
        return;
    }

    if (value === '.' && displayValue.includes('.')) {
        return;
    }

    if (displayValue == '0') {
        displayValue = '';
    }

    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    currentOperator = null;
    firstOperand = null;
    updateDisplay();
}

function addDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(operator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        displayValue = '';
        updateDisplay();
    } else {
        calculateResult();
    }

    currentOperator = operator;
}
function corregir(){
    // Elimina el último carácter del valor en pantalla
    displayValue = displayValue.slice(0, -1);

    // Si no quedan caracteres, establece el valor en pantalla a '0'
    if (displayValue === '') {
        displayValue = '0';
    }

    updateDisplay();
}
function calculateResult() {
    if (currentOperator && firstOperand !== null) {
        const secondOperand = parseFloat(displayValue);

        switch (currentOperator) {
            case '+':
                displayValue = suma(firstOperand, secondOperand).toString();
                break;
            case '-':
                displayValue = resta(firstOperand, secondOperand).toString();
                break;
            case '*':
                displayValue = multi(firstOperand, secondOperand).toString();
                break;
            case '/':
                const divisionResult = divi(firstOperand, secondOperand);
                displayValue = divisionResult === "error" ? "Error" : divisionResult.toString();
                break;
            default:
                displayValue = 'Error';
        }

        currentOperator = null;
        firstOperand = null;
        updateDisplay();
    }
}

// Inicializar la pantalla con 0
updateDisplay();
