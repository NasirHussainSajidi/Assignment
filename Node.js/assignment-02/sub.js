console.log("(----------------- This is sub.js -----------------)");

const number1 = 5;
const number2 = 3;
console.log(number1, number2);

function subtract(number1, number2) {
    return number1 - number2;
}

subtract(8, 2);
module.exports = {
    number1,
    number2,    
    subtract
}