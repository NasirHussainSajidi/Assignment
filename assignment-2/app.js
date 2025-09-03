console.log("(////////// This is app.js //////////)");

// const {n1,n2, sum}= require('./calculation/sum')
const {div, mul, sub, sum} = require('./calculation')


// console.log(calculation.sum.n1, calculation.sum.n2)
// console.log(calculation.sum(16,4))
// // console.log(sum.n1, sum.n2)
// console.log(sum(16,4))

console.log(sum)
console.log(sum.sum(20,3))
console.log(sum.n1, sum.n2)


// // const {num1, num2, multiply} = require('./calculation/mul')
// console.log(num1, num2)
// console.log(multiply(3,20))

console.log(mul)
console.log(mul.multiply(10,10))
console.log(mul.num1, mul.num2)

// // const {a, b, divide} = require('./calculation/div')
// console.log(a)

// // console.log(n1.a* n1.b)
// console.log(a, b)
// console.log(divide(50, 5))

console.log(div)

console.log(div.divide(50, 5))
console.log(div.a, div.b)
console.log(div.divide(10000, 10))

// const {number1, number2, subtract} = require('./calculation/sub')
// console.log(number1, number2)

// console.log(subtract(50, 10))

console.log(sub)
console.log(sub.subtract(10,3))
console.log(sub.number1, sub.number2)
// console.log(`Sum: ${n1, n2}, Division: ${a, b}, Multiplication: ${num1, num2}, Subtraction: ${number1, number2}`);