console.log("Hello ! this is a main.js file")

console.log("//////////////////////////////////////////////////")

const {fullName, age, cnic, add, addNumbers}=require('./add.js')

console.log(fullName)
console.log(age)
console.log(cnic)
console.log(add(5,10))
addNumbers()


console.log("//////////////////////////////////////////////////")
const {divide,a, b} = require('./div.js')
console.log("inside app.js",a, b )
console.log(divide(10,2))
console.log(divide(20,2))
console.log(divide(30,2))

console.log("/////////////////////////////////////////")

const {num1,num2, multiplication} = require('./mul.js')

console.log(num1*num2)
console.log(multiplication(6,3))


console.log("////////////////////////////////////////")

const {val1, val2, subtraction}=require('./sub.js')
console.log("inside app.js", val1-val2)
console.log(subtraction(20,5))