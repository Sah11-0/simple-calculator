const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')
let operator = ''
let operand1 = null
let operand2 = null

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText

    if (value === 'C'){
      display.value = ''
      operator = ''
      operand1 = null
      operand2 = null
    } else if (value === '='){
      operand2 = parseFloat(display.value)
      const result = operate(operator, operand1, operand2)
      display.value = result
      operator = ''
      operand1 = null
      operand2 = null
    } else if (isOperator(value)){
      operator = value;
      operand1 = parseFloat(display.value)
      display.value = ''
    } else {
      display.value += value
    }
  })
})

function isOperator(value){
  return value === '+' || value === '-' || value === '*' || value === '/'
}

function operate(operator, operand1, operand2){
  switch (operator){
    case '+':
      return operand1 + operand2
    case '-':
      return operand1 - operand2
    case '*':
      return operand1 * operand2
    case '/':
      return operand1 / operand2
  }
}