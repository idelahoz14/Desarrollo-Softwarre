const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultPara = document.getElementById('result');

// Funciones flecha para realizar operaciones
const add = () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 + num2;
    resultPara.textContent = `Resultado: ${result}`;
};

const subtract = () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 - num2;
    resultPara.textContent = `Resultado: ${result}`;
};

const multiply = () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 * num2;
    resultPara.textContent = `Resultado: ${result}`;
};

const divide = () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (num2 === 0) {
        resultPara.textContent = 'No se puede dividir por 0';
    } else {
        const result = num1 / num2;
        resultPara.textContent = `Resultado: ${result}`;
    }
};

// Event listeners para los botones
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
