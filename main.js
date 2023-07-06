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
const DECIMAL = document.getElementById('decimal');
const NEGATIVE = document.getElementById('negative');
const DEL = document.getElementById('del');

const LOWER_SCREEN = document.getElementById('lower-screen');
const UPPER_SCREEN = document.getElementById('upper-screen');
const ON_BUTTON =  document.getElementById('on');


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
SUBTRACTION.addEventListener('click', operator);
EXECUTE.addEventListener('click', operate);

DEL.addEventListener('click', deleteCharacter);
DECIMAL.addEventListener('click', numbers);
NEGATIVE.addEventListener('click', numbers);
ON_BUTTON.addEventListener('click', clearScreen)


/* const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach(button => button.addEventListener('click', showNumber)); */


let number1 = [];
let operatorSign = [];
let number2 = [];
let answer = [];
let isEqualsPressed = false;
let numberLength1 = 0;

function numbers(e) {
    let numberA = e.target.innerHTML;
    numberLength1 = number1.toString().split("");

    /////////////////////////////////////////////////
    //fix this if statement. not allowing the second number to be input once the max characters length for number1 is reached.
    if (numberLength1.length > 14 || number2.length > 15) {
        UPPER_SCREEN.innerText = "MAX CHARACTER LENGTH";
        setTimeout(() => {
            if (number2.length == 0 && operatorSign.length != 0) {
                UPPER_SCREEN.innerText = number1;
            } else {
                UPPER_SCREEN.innerText = "";
            }
        }, 3000);

        return;
    }
    //////////////////////////////////////////////////

    if (isEqualsPressed == true) {
        return;
    } else if (operatorSign == "") {

        if (number1.length < 1 && numberA == ".") {
            return;
        }

        if (numberA == "." && number1.toString().split("").includes(".")) {
            return;
        }

        if (numberA == "(-)" && !(number1.toString().split("").includes("-"))) {
            numberA = numberA[1];
            number1.unshift(numberA);
            number1 = number1.join("");
            number1 = [number1];
            LOWER_SCREEN.innerHTML = number1;
            return;
        }

        if (numberA == "(-)" && number1.toString().split("").includes("-")) {
            return;
        }

        number1.push(numberA);
        number1 = number1.join("");
        number1 = [number1];
        LOWER_SCREEN.innerHTML = number1;

    } else {

        if (numberA == "." && number2.toString().split("").includes(".")) {
            return;
        }

        if (numberA == "(-)" && !(number2.toString().split("").includes("-"))) {
            numberA = numberA[1];
            number2.unshift(numberA);
            number2 = number2.join("");
            number2 = [number2];
            LOWER_SCREEN.innerHTML = number2;
            return;
        }

        if (numberA == "(-)" && number2.toString().split("").includes("-")) {
            return;
        }

        UPPER_SCREEN.innerHTML = number1 + " " + operatorSign;
        number2.push(numberA);
        number2 = number2.join("");
        number2 = [number2];
        LOWER_SCREEN.innerHTML = number2;
    }
}

function operator(e) {
    if (number1.length != 0 && number2.length != 0) {
        operate();
        UPPER_SCREEN.innerHTML = number1 + " " + operatorSign;
        LOWER_SCREEN.innerHTML = "";
    }
    if (number1.length != 0 && operatorSign.length < 1 && number1 != "-") {
        operatorSign.push(e.target.innerHTML);
        UPPER_SCREEN.innerHTML = number1 + " " + operatorSign;
        LOWER_SCREEN.innerHTML = "";
    }
    if (isEqualsPressed == true) {
        isEqualsPressed = false;
    }
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
    if (b != 0) {
        number1 = a / b;
        number1 = [number1];
        number2 = [];
    return a / b;
    } else {
        number1 = [];
        operatorSign = [];
        number2 = [];
        isEqualsPressed = false;
        return "error";
    }
    
}

function operate() {  
    MULTIPLICATION.onclick = null;
    isEqualsPressed = true;
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
}

function deleteCharacter() {
    if (isEqualsPressed == true) return;

    if (number1.length == 0 && number2.length == 0) {
        return;
    } else if (number1.length > 0 && number2.length == 0) {
        number1 = number1.toString().split("");
        Array.from(number1);
        number1.pop();
        number1 = number1.join("");
        number1 = [number1];
        LOWER_SCREEN.innerText = number1;
    } else if (number1.length > 0 && number2.length == 0 && operatorSign != []) {
        number2 = number2.toString().split("");
        Array.from(number1);
        number2.pop();
        number2 = number2.join("");
        number2 = [number2];
        LOWER_SCREEN.innerText = number2;
    } else {
        return;
    }
}

function clearScreen() {
    UPPER_SCREEN.innerHTML = "";
    LOWER_SCREEN.innerHTML = "";
    number1 = [];
    operatorSign = [];
    number2 = [];
    isEqualsPressed = false;
}