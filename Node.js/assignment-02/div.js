console.log("(//////// This is div.js //////////)");


let a = 10;
let b = 2;
let division = a/b
console.log("Division Result: ", division);

function divide(a,b){
    return a/b
}
divide(50, 5)
module.exports = {
    a, 
    b,
    divide
}