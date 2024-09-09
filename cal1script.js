// Get the display and key elements
const display = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');

// Variables to keep track of the operation state
let currentInput = '';
let operator = '';
let previousInput = '';

keys.addEventListener('click', event => {
    const { target } = event;  // Get the clicked element
    const { value } = target;  // Get the value of the clicked button

    if (!target.matches('button')) {
        return;  // Exit if the clicked element is not a button
    }

    // Handle clear button
    if (value === 'all-clear') {
        currentInput = '';
        operator = '';
        previousInput = '';
        display.value = '';
        return;
    }

    // Handle equal sign
    if (value === '=') {
        if (operator && previousInput !== '') {
            currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
            display.value = currentInput;
            previousInput = '';
            operator = '';
        }
        return;
    }

    // Handle operators
    if (target.classList.contains('operator')) {
        if (currentInput === '' && previousInput === '') {
            return;
        }

        if (operator && previousInput !== '') {
            currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
            display.value = currentInput;
        }

        previousInput = currentInput;
        operator = value;
        currentInput = '';
        return;
    }

    // Handle numbers and decimal point
    currentInput += value;
    display.value = currentInput;
});
