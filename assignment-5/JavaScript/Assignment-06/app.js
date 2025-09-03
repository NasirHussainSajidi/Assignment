        // to find age 
const date = new Date()
const getYear =date.getFullYear()
const dateOfBirth = prompt("enter date of birth")
const age = getYear - dateOfBirth
const month = prompt("enter month")
const months = 12 - month
const day = prompt("enter day")
const days = 30 - day
alert(`your age is ${age} month is ${months} Day is ${days}`)


