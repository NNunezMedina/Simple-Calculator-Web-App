const firstNumberInput = document.querySelector('#num1');
const secondNumberInput = document.querySelector('#num2');
const resultInput = document.querySelector('#result');
const addButton = document.querySelector('#add');
const subtractionButton = document.querySelector('#subtraction');
const multiplicateButton = document.querySelector('#multiplicate');
const divideButton = document.querySelector('#divide');


function addNumbers() {
    const firstNumber = parseFloat(firstNumberInput.value)
    const secondNumber = parseFloat(secondNumberInput.value)
    const result = firstNumber + secondNumber;
    resultInput.value = result;
}

function subtractionNumbers() {
    const firstNumber = parseFloat(firstNumberInput.value)
    const secondNumber = parseFloat(secondNumberInput.value)
    const result = firstNumber - secondNumber;
    resultInput.value = result;
}

function multiplicateNumbers() {
    const firstNumber = parseFloat(firstNumberInput.value)
    const secondNumber = parseFloat(secondNumberInput.value)
    const result = firstNumber * secondNumber;
    resultInput.value = result;
}

function divideNumbers() {
    const firstNumber = parseFloat(firstNumberInput.value)
    const secondNumber = parseFloat(secondNumberInput.value)
    const result = firstNumber / secondNumber;
    resultInput.value = result.toFixed(5);
}

addButton.addEventListener("click",addNumbers);
subtractionButton.addEventListener("click",subtractionNumbers);
multiplicateButton.addEventListener("click", multiplicateNumbers);
divideButton.addEventListener("click", divideNumbers);


