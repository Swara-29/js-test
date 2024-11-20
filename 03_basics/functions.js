// function sayMyName () {
//         console.log("S")
//         console.log("W")
//         console.log("A")
//         console.log("R")
//         console.log("A")
// }
// //sayMyName()

// function addTwoNumbers(num1, num2) {
//     //console.log(num1 + num2);

//     // let result = num1 + num2
//     // return result

//     return num1 + num2
// }
// const result = addTwoNumbers(3,6)

// //console.log("Result", result);

// function loginUserMessage(username= "Sam") {
//     if(username === undefined) {
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in `
// }

// console.log(loginUserMessage("Swara"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400))

const user = {
    username : "swara",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username: "sara",
    price : 466
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,400,600]));