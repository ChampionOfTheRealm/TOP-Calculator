const NUMBERS = document.querySelectorAll('.numbers');
const OPERATOR = document.querySelectorAll('.operator');
const EXECUTE = document.getElementById('execute');
const DEL = document.getElementById('del');
const LOWER_SCREEN = document.getElementById('lower-screen');
const UPPER_SCREEN = document.getElementById('upper-screen');

NUMBERS.forEach(button => button.addEventListener('click', numbers));
OPERATOR.forEach(button => button.addEventListener('click', operator));
EXECUTE.addEventListener('click', operate);
DEL.addEventListener('click', deleteCharacter);
ON_BUTTON.addEventListener('click', clearScreen)
window.addEventListener('keydown', keyPress);

//THIS IS TO IMPLENT THE SCREEN TURNING ON.
//WORK ON THIS AFTER REFACTORING.
const ON_BUTTON =  document.getElementById('on');
//YOU ALSO NEED TO FIX THE ISSUE WITH DIVIDING 1 BY 998001. THE NUMBER IS LONGER THAN THE SCREEN

let number1 = [];
let operatorSign = [];
let number2 = [];
let isEqualsPressed = false;
let numberLength1 = 0;
let numberLength = 0;

function numbers(e) {
    let numberA;
    numberLength1 = number1.toString().split("");
    numberLength2 = number2.toString().split("");
    
    if (e.key) {
        numberA = e.key;
    } else {
        numberA = e.target.innerHTML;
    }

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
