console.log("This is the div.js file")

function divide(a,b){
    if (b === 0){
        return "Cannot divide by zero"
    }
    return a/b
}
console.log(divide(10,2))
// module.exports = divide;

const a = 20;
const b = 5;
console.log(a, b)
console.log(`The result of dividing ${a} by ${b} is:`, divide(a, b));

module.exports = {
    divide,
    a,
    b
}