/* const ONE = document.getElementById('one');
const TWO = document.getElementById('two');
const THREE = document.getElementById('three');
const FOUR = document.getElementById('four');
const FIVE = document.getElementById('five');
const SIX = document.getElementById('six');
const SEVEN = document.getElementById('seven');
const EIGHT = document.getElementById('eight');
const NINE = document.getElementById('nine');
const ZERO = document.getElementById('zero');

const MULTIPLICATION = document.getElementById('multiplication');
const DIVISION = document.getElementById('division');
const ADDITION = document.getElementById('addition'); */
const EXECUTE = document.getElementById('execute');
EXECUTE.addEventListener('click', execute);
const SCREEN = document.getElementById('screen');

const BUTTONS = document.querySelectorAll('button');

BUTTONS.forEach(button => button.addEventListener('click', showNumber));


let currentScreenEquation = [];

function showNumber(e) {
    const button = e.target.innerText;
    currentScreenEquation.push(button);
    SCREEN.innerText = currentScreenEquation.join('');
    return button;
}

function execute(e) {
    console.log(e.target);
    return e;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(value1, operator, value2) {
    if (operator == "+") {
        return add(value1, value2);
    } else if (operator == "-") {
        return subtract(value1, value2);
    } else if (operator == "/") {
        return divide(value1, value2);
    } else if (operator == "*") {
        return multiply(value1, value2);
    }
}