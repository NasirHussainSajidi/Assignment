// // What will be the output in variables a, b & result after
// // execution of the following script:

// let a = 10 
// console.log("The value of a is :", a)

// console.log("the value of ++a is :", ++a)

// console.log("The value of a++ is :", a++)

// console.log("the value of --a is :", --a)
// console.log("The value of a-- is :", a--)

// var num1 = 2
// var num2 = 1
// var result = --num1 - --num2 + ++num2 + num2--
// console.log("num1=:",num1, "num2=:", num2) 
// console.log("result is :", result)

// var fname = prompt("enter a name")
// console.log("asslamu alikum ", fname)


// var number = prompt("Enter a number", 5)
// for(let i=1; i<=10; i++ ){
//     console.log(number, "x",i ,"=",number*i)
// }

// let sub1 = Math
// let sub2 = phy
// let sub3 = comp
// let totalMark = 100
// let sub1Obt = prompt("enter obtain number")
// let sub2Obt = prompt("enter obtain number")
// let sub3Obt = prompt("enter obtain number")
// let totalMarks = sub1Obt+sub2Obt+sub3Obt
// let percentage = totalMarks/3
// console.log(sub1, sub1Obt, percentage, sub2, sub2Obt, percentage, sub3 , sub3Obt, percentage)


// // CHAPTER 9 TO 11
// let cityName = prompt("enter city name")
// if(cityName == "karachi"){
//     console.log("Welcome to city of light")
// }

// let Gender = prompt("enter Gender")
// if(Gender == "male"){
//     console.log("Good Morning Sir.")
// } else if (Gender == "female"){
//     console.log("Good Morning Ma'am.")
// }


// var color = prompt("enter color")
// if(color == "red"){
//     console.log("must stop")
// }else if (color == "yellow"){
//     console.log("Ready to move")
// }else if (color == "green"){
//     console.log("Move now")
// }


// var remainingFuel = prompt("enter a current fule quantity")
// if(remainingFuel < 0.25){
//     console.log("Please refill the fuel in your car")
//  }
// // /////////////////////////////////////
// //  var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }
// // var b = 82;
// // if (b++ === 83){
// // alert("given condition for variable b is true");
// // }
// // var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // if (c === 13){
// // alert("condition 2 is true");
// // }
// // if (++c < 14){
// // alert("condition 3 is true");
// // }
// // if(c === 14){
// // alert("condition 4 is true");
// // }
// // var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }
// // e. if (true){
// // alert("True");
// // }
// // if (false){
// // alert("False");
// // }
// // if("car" < "cat"){
// //     alert("car is smaller than cat");
// //     }


// let obtain1 = prompt("enter obtain1 mark")
// let obtain2 = prompt("enter obtain2 mark")
// let obtain3 = prompt("enter obtain3 mark")
// let totalObtMarks = Number(obtain1 + obtain2 + obtain3)
// let percent = (totalObtMarks*100)/300
// console.log("Marks Sheet")

// console.log("Total marks : 300")
// console.log("Marks obtain :", totalObtMarks)
// console.log("persentage :", percent)
// if(percent >= 80){
//     console.log("He/She gote A-ont")
//     console.log("Excellent")
// }else if (percent >= 70){
//     console.log("He/She gote A")
//     console.log("Good")
// }else if(percent >= 60) {
//     console.log("He/She gote B")
//     console.log("You need to improve")
// }else if(percent < 60 ){
//     console.log("Fail")
//     console.log("Sorry")
// } 




// Solve Gun license example without using second if !

const confirmCnic = confirm("Do you have CNIC");

if(confirmCnic === true){

    const GunLicenseRequiredAge = prompt("Enter your age", 18);

    if(GunLicenseRequiredAge >= 18){
        alert("You are eligible for Gun License");
    }else{
       alert("You are not eligible for Gun License");
    }
}