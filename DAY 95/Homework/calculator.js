function calculator(a, b, operator) {
    if (operator === '+') {
      return a + b;
    } else if (operator === '-') {
      return a - b;
    } else if (operator === '*') {
      return a * b;
    } else if (operator === '/') {
      if (b !== 0) {
        return a / b;
      } else {
        return 'Division by zero error';
      }
    } else {
      return 'Invalid operator';
    }
}
  
module.exports = calculator