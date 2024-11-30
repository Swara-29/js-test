// const user = {
//     username : "swara",
//     loginCOunt : 8,
//     signedIn : true,

//     getUserDetail: function(){
//         console.log("got user details from database");
//         console.log(this);
        
//     }
// }
// console.log(user.username);
// //console.log(user.getUserDetail());
// console.log(this);

 function User(username, loginCOunt, isLoggedIn){
    this.username = username
    this.loginCOunt = loginCOunt;
    this.isLoggedIn = isLoggedIn

    this.greetingd = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("swara", 12, true)
const userTwo = new User("sara", 12, true)

console.log(userOne.constructor);
console.log(userTwo);
