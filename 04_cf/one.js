const balance = 1000

if (balance < 500) {
    console.log("less than");
}else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
    console.log("less than 900")
} else {
    console.log("less than 1200")
}

const userLoggedIn = true 
const debitCard = true 
const loggedInFRomGoggle = false
const loggrdInfromEmail = true

if (userLoggedIn && debitCard && 2==4) {
    console.log("Allow to buy course")
}

if (loggedInFRomGoggle || loggrdInfromEmail) {
    console.log("user logged in")
}

//Nullish Coalescing Operator (??): null defined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

//var1 = undefined ?? 15
var1 = null ?? 10 ?? 15

console.log(var1);


// Terniary Operator 

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")