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

window.addEventListener('keydown', keyPress);


/* const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach(button => button.addEventListener('click', showNumber)); */


let number1 = [];
let operatorSign = [];
let number2 = [];
let answer = [];
let isEqualsPressed = false;
let numberLength1 = 0;
let numberLength = 0;

function numbers(e) {
    console.log(e)
    let numberA;
    if (e.key) {
        numberA = e.key;
    } else {
        numberA = e.target.innerHTML;
    }
    
    console.log("numberA: ", numberA);

    numberLength1 = number1.toString().split("");
    numberLength2 = number2.toString().split("");

    if (isEqualsPressed == true) {
        return;
    } else if (operatorSign == "") {

        if (numberLength1.length > 19) {
            UPPER_SCREEN.innerText = "MAX CHARACTER LENGTH";
            setTimeout(() => {
                UPPER_SCREEN.innerText = "";
            }, 3000);
            return;
        }

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
            number1 = number1.toString().split("");
            number1.shift();
            number1 = number1.join("");
            number1 = [number1];
            LOWER_SCREEN.innerHTML = number1;
            return;
        }

        number1.push(numberA);
        number1 = number1.join("");
        number1 = [number1];
        LOWER_SCREEN.innerHTML = number1;

    } else {

        if (numberLength2.length > 19) {
            UPPER_SCREEN.innerText = "MAX CHARACTER LENGTH";
            setTimeout(() => {
                if (!isEqualsPressed) {
                    UPPER_SCREEN.innerText = number1 + operatorSign;
                }
            }, 3000);
            return;
        }

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
            number2 = number2.toString().split("");
            number2.shift();
            number2 = number2.join("");
            number2 = [number2];
            LOWER_SCREEN.innerHTML = number2;
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
    let operatorSignA;
    if (e.key) {
        operatorSignA = e.key;
    } else {
        operatorSignA = e.target.innerHTML;
    }

    if (number1.length != 0 && number2.length != 0) {
        operate();
        UPPER_SCREEN.innerHTML = number1 + " " + operatorSign;
        LOWER_SCREEN.innerHTML = "";
    }
    if (number1.length != 0 && operatorSign.length < 1 && number1 != "-") {
        operatorSign.push(operatorSignA);
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
    } else if (operatorSign[0] == "÷" || operatorSign[0] == "/") {
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
    } else if (number1.length > 0 && number2.length == 0 && operatorSign.length == 0) {
        number1 = number1.toString().split("");
        Array.from(number1);
        number1.pop();
        number1 = number1.join("");
        number1 = [number1];
        LOWER_SCREEN.innerText = number1;
    } else if (number1.length > 0 && number2.length > 0) {
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

function keyPress(e) {
    showEvent(e);

    if (e.key == " ") return;

    if ((e.key >= 0 && e.key <= 9)){
        numbers(e);
    } else if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        e.preventDefault();
        operator(e);
    } else if (e.key == "Enter") {
        operate();
    } else if (e.key == "Backspace"){
        deleteCharacter();
    }
}

function showEvent(e) {
    console.log(e);
}