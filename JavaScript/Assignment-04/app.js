let a = +prompt("enter first no")
let b = +prompt("enter second no")
let c = prompt("perform operation")

function add(){
    let addition = a+b
    console.log(`addition of ${a} and ${b} is = ${addition}`)
}

function sub(){
    let subtraction = a-b
    console.log(`subtraction of ${a} and ${b} is = ${subtraction}`)
}
function mul(){
    let multiple = a*b
    console.log(`multiple of ${a} and ${b} is = ${multiple}`)
}
function div(){
    let division = a/b
    console.log(`division of ${a} and ${b} is = ${division}`)
}

if(c == "+"){
    add()
}
else if(c === "-"){
    sub()
}
else if(c === "*"){
    mul()
}
else if(c === "/"){
    div()
}
else{
    console.log("some things else plese try again")
}