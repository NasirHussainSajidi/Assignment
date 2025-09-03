console.log("This is the sub.js file")

const val1 = 89
const val2 = 19

function subtraction(x,y){
    return x-y
}
module.exports = {
    val1,
    val2,
    subtraction
}