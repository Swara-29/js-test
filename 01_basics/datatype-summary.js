//primitive datatype

// 7 types: string,number,boolean,null,undefined,symbol,bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234456845665334n


// Reference (Non- primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "swara",
    age: 20,
}

const myFunction = function() {
    console.log("Hello worls");
}
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);


//++++++++++++++++++++

//Stack (Primitive) , heap (Non-primitive)

let myYoutubeName = "swarapudke.com"
anothername = "chaiaurcode"
console.log(myYoutubeName);
console.log(anothername);

let user1 = {
    email: "userone.com",
    upi: " user@ybl"
}
let user2 = user1
user2.email = "swarapudke.com"

console.log(user1.email);
console.log(user2.email);