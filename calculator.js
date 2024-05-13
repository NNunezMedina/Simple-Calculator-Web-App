const firstNumberInput = document.querySelector('#num1');
const secondNumberInput = document.querySelector('#num2');
const resultInput = document.querySelector('#result');
const addButton = document.querySelector('#add')

function addNumbers() {
    const firstNumber = parseFloat(firstNumberInput.value)
    const secondNumber = parseFloat(secondNumberInput.value)
    const result = firstNumber + secondNumber;
    resultInput.value = result;
}

addButton.addEventListener("click",addNumbers)


