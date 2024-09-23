function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    // Division by zero?
    if (num2 === 0) {
        return "Cant divide by zero dum dum";
    }
    return num1 / num2;
}



const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const clear = document.querySelector("#clear");

let firstNum = "";
let operator = null;
let secondNum = "";
let result = null;


// 55 + 55 =
//    STOP VAR1 
operators.forEach((op) => {
    op.addEventListener("click", (event) => {
         // If operator already exists, we must operate
         if (operator !== null) {
            result = operate(firstNum, operator, secondNum);
            populateDisplay(result);
            operator = event.target.innerText;
        }

        operator = event.target.innerText;

    })
})

operands.forEach((operand) => {
    operand.addEventListener("click", (event) => {
        if (operator === null) {
            firstNum += event.target.innerText;
    }
        else {
            secondNum += event.target.innerText;
        }

    })
})

clear.addEventListener("click", ()  => {
    display.textContent = "0";
})

function operate(num1, op, num2) {
    num1 = Number.parseInt(num1, 10);
    num2 = Number.parseInt(num2, 10);

    let calc;
    switch (op) {
        case "+":
            calc = add(num1, num2);
            break;
        case "-":
            calc = subtract(num1, num2);
            break;
        case "x":
            calc = multiply(num1, num2);
            break;
        case "÷":
            calc = divide(num1, num2);
            break;
    }
    // Clear old global variables
    firstNum = "";
    secondNum = "";
    operator = null;
    console.log(calc);
    return calc;

}

function populateDisplay(result) {
    display.textContent = result;
}