console.log("(+++++++++++++ This is sum.js +++++++++++++)");

const n1 = 15
const n2 = 25
console.log(`n1: ${n1}, n2: ${n2}`);

function sum(n1, n2){
    return n1 + n2;

}
console.log(sum(7, 3))
module.exports = {
    n1,
    n2,
    sum
};