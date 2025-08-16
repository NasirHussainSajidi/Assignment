const a = Math.floor(Math.random()*10+1)
const b = prompt("Guess the number in between 1 to 10")


    if(a==b){
        alert("you won the game",5)
    }
    else{
        alert(`you lose, the correct no is ${a}`)
    }
    


// HOMEWORK: Fix this code issue
const firstName = prompt("enter cities name")
const city = ["karachi", "lahore", "islambad"]
function checkCity(city) {
    for (let i = 0; i < city.length; i++) {
        if (city.toLowerCase() === city[i]) {
            alert("City Found")
            break
        }else{
            alert("City Not Found")
        }
    }
}

checkCity(firstName)