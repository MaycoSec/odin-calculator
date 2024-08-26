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
    return num1 / num2;
}

function operate(num1, operator, num2) {

}

const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const clear = document.querySelector("#clear");


// 55 + 55 =
//    STOP VAR1 
operators.forEach((operator) => {
    opearator.addEventListener("click", () => {
        if (nOfOperators > 2) {
            // Then we make the first calculation and swap variable.
        }
        
        let id = operator.id;

    })
})
clear.addEventListener("click", ()  => {
    display.textContent = "";
})