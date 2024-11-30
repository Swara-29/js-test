// // let myName = "swara  "

// // console.log(myName.truelength);

// let myHeros = ["thor" , "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.swara = function(){
//     console.log(`swara is present in all onjects`);
    
// }

// Array.prototype.heySwara = function(){
//     console.log(`swara says hlw`);
    
// }
// // heroPower.swara()

// myHeros.swara()
// myHeros.heySwara()
// // heroPower.heySwara()

//inheritance


const user = {
    name:"chai",
    email:"chai@.com"
}
const teacher = {
    makeVideo : true
}

const teachingSuppot = {
    isAvailable : false
}

const TASupport = {
    makeASsignment : 'js assignment',
    fullTime: true,
    __proto__:teachingSuppot
}

teacher.__proto__= user

//modern syntax

Object.setPrototypeOf(teachingSuppot, teacher)

let anotherUserName = "chaiaurcode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
}
anotherUserName.trueLength()
"swara".trueLength()
