// singleton

// object literals

const jsUser = {
    name: "Swara",
    age: 18,
    location: "Durg",
    email: "dxhcbed@gmail.com",
    isLoggedIn: false,
    latLogedInDays:["Monday", "Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["location"])
// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting2());