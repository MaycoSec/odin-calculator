function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
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
let oldOperatorQuery = null;
let secondNum = "";
let result = null;

operators.forEach((op) => {
    op.addEventListener("click", (event) => {
        // If operator already exists, we must operate
        if (operator !== null && secondNum !== "") {
            // Remove styles from first operator
            oldOperatorQuery.style.backgroundColor = "#171717"
            oldOperatorQuery.style.opacity = "1.0"
            result = operate(firstNum, operator, secondNum);
            populateDisplay(result);
        }
        // first operator, lets make sure the user knows it
        else if (operator === null && firstNum !== "") {
            // First operator being an equal?
            if (event.target.innerText !== "=") {
                operator = event.target.innerText;
                console.log(event.target.id)
                let tempBtn = document.querySelector("#" + event.target.id);
                tempBtn.style.backgroundColor = "gray"
                tempBtn.style.opacity = "0.9";
                // Just so we can remove the styles when the time comes.
                oldOperatorQuery = tempBtn;
            }
        }
    })
})

operands.forEach((operand) => {
    operand.addEventListener("click", (event) => {
        if (operator === null) {
            firstNum += event.target.innerText;
            populateDisplay(firstNum);
            console.log(firstNum);
        }
        else {
            secondNum += event.target.innerText;
            console.log(secondNum);
            populateDisplay(secondNum);
            console.log(`firstnum from else: ${firstNum}`);
            if (firstNum === null) {
                firstNum = result;
            }
        }

    })
})

// Clears display and variables 
clear.addEventListener("click", () => {
    display.textContent = "0";
    firstNum = "";
    operator = null;
    oldOperatorQuery = null;
    secondNum = "";
    result = null;
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
    // Round decimal numbers, if any
    if (!Number.isInteger(calc)) {
        calc = calc.toFixed(2);
    }
    // Clear old global variables
    firstNum = null;
    secondNum = "";
    operator = null;
    result = calc;
    return calc;

}

function populateDisplay(result) {
    display.textContent = result;
}