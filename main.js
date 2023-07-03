const ONE = document.getElementById('one');
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
const ADDITION = document.getElementById('addition');
const SUBTRACTION = document.getElementById('subtraction')
const EXECUTE = document.getElementById('execute');
const DECIMAL = document.getElementById('decimal')

const DEL = document.getElementById('del');

const LOWER_SCREEN = document.getElementById('lower-screen');
const UPPER_SCREEN = document.getElementById('upper-screen');

ONE.addEventListener('click', numbers);
TWO.addEventListener('click', numbers);
THREE.addEventListener('click', numbers);
FOUR.addEventListener('click', numbers);
FIVE.addEventListener('click', numbers);
SIX.addEventListener('click', numbers);
SEVEN.addEventListener('click', numbers);
EIGHT.addEventListener('click', numbers);
NINE.addEventListener('click', numbers);
ZERO.addEventListener('click', numbers);

MULTIPLICATION.addEventListener('click', operator);
DIVISION.addEventListener('click', operator);
ADDITION.addEventListener('click', operator);
SUBTRACTION.addEventListener('click', operator)
EXECUTE.addEventListener('click', operate);

DEL.addEventListener('click', clearScreen);
DECIMAL.addEventListener('click', numbers)


/* const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach(button => button.addEventListener('click', showNumber)); */


let number1 = [];
let operatorSign = [];
let number2 = [];
let equation = [];
let answer = [];
let isEqualsPressed = false;

function numbers(e) {
    let numberA = e.target.innerHTML;

    if (isEqualsPressed == true) {
        return;
    } else if (operatorSign == "") {
        if (number1.length < 1 && numberA == ".") {
            return;
        }
        number1.push(numberA);
        number1 = number1.join("");
        number1 = [number1];
        LOWER_SCREEN.innerHTML = number1;
    } else {
        UPPER_SCREEN.innerHTML = number1 + " " + operatorSign;
        number2.push(numberA);
        number2 = number2.join("");
        number2 = [number2];
        LOWER_SCREEN.innerHTML = number2;
    }
    console.log("Number1: ", number1);
    console.log("Number2: ", number2);
}

function operator(e) {
    if (number1.length != 0 && number2.length != 0) {
        operate();
        UPPER_SCREEN.innerHTML = number1 + " " + operatorSign;
        LOWER_SCREEN.innerHTML = "";
    }
    if (number1.length != 0 && operatorSign.length < 1) {
        operatorSign.push(e.target.innerHTML);
        UPPER_SCREEN.innerHTML = number1 + " " + operatorSign;
        LOWER_SCREEN.innerHTML = "";
    }
    if (isEqualsPressed == true) {
        isEqualsPressed = false;
    }
    console.log("operatorSign: ", operatorSign);
}


function add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    number1 = a + b;
    number1 = [number1];
    number2 = [];
    return a + b;
}

function subtract(a, b) {
    number1 = a - b;
    number1 = [number1];
    number2 = [];
    return a - b;
}

function multiply(a, b) {
    number1 = a * b;
    number1 = [number1];
    number2 = [];
    return a * b;
}

function divide(a, b) {
    number1 = a / b;
    number1 = [number1];
    number2 = [];
    return a / b;
}

function operate() {  
    MULTIPLICATION.onclick = null;
    isEqualsPressed = true;
    console.log("Number1: ", number1);
    console.log("Opperator: ", operator);
    console.log("Number2: ", number2);
    UPPER_SCREEN.innerHTML = number1 + " " + operatorSign + " " + number2;
    if (operatorSign[0] == "+") {
        LOWER_SCREEN.innerHTML = add(number1, number2);
    } else if (operatorSign[0] == "-") {
        LOWER_SCREEN.innerHTML = subtract(number1, number2);
    } else if (operatorSign[0] == "÷") {
        LOWER_SCREEN.innerHTML = divide(number1, number2);
    } else if (operatorSign[0] == "x") {
        LOWER_SCREEN.innerHTML =  multiply(number1, number2);
    }
    operatorSign = [];
    number2 = [];
    equation = [];
}

function clearScreen() {
    UPPER_SCREEN.innerHTML = "";
    LOWER_SCREEN.innerHTML = "";
    number1 = [];
    operatorSign = [];
    number2 = [];
    equation = [];
    isEqualsPressed = false;
}