console.log("This is the add.js file")

function add(a, b){
    return a+b
    
}


let fullName = "Nasir Hussain"
let age = 22
let cnic= "12345-1234567-1"




function addNumbers(){
    console.log("This is the addNumbers function")
}
module.exports = {
    addNumbers,
    add,
    fullName,
    age,
    cnic
    
}