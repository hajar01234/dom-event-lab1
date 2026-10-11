const operator = document.querySelectorAll('.operator');
const numElement = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const calculator = document.querySelector('#calculator');

let firstNumber = "";
let operation = "";
let secondNumber = '';


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        //console.log(event.target.innerText);
    });
});


calculator.addEventListener('click', (event) => {
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    if (operation === '') {
        firstNumber += event.target.innerText;
    } else {
        secondNumber += event.target.innerText;
    }

    display.innerText = firstNumber +
        (operation ? ' ' + operation + ' ' : '') +
        secondNumber;
  }

  if (event.target.classList.contains('operator')) {
    if (event.target.innerText !== 'C') {
        operation = event.target.innerText;
        display.innerText = firstNumber + ' ' + operation + ' ';
    }
  }

  if (event.target.classList.contains('equals')) {
    let result;

    if (firstNumber !== '' && secondNumber !== '' && operation !== '') {

        if (operation === '+') {
            result = Number(firstNumber) + Number(secondNumber);
        } else if (operation === '-') {
            result = Number(firstNumber) - Number(secondNumber);
        } else if (operation === '*') {
            result = Number(firstNumber) * Number(secondNumber);
        } else if (operation === '/') {
            result = Number(firstNumber) / Number(secondNumber);
        }

        if (result !== undefined) {
            display.innerText = result;
            firstNumber = String(result);
            secondNumber = '';
            operation = '';
        }
    }
  }

  if (event.target.innerText === 'C') {
    display.innerText = '0';
    firstNumber = '';
    operation = '';
    secondNumber = '';
  }

});