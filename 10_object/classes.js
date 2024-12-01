// ES6

// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
// }
//     encryptPassword (){
//         return `${this.password}abc`
//     }

//     changeUSerNAme(){
//         return `${this.username.toUpperCase()}`
//     }}
// const chai = new user("chai", "chai@gmial.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUSerNAme());


// behind the scene

function user(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
}

user.prototype.encryptPassword = function (){
    return `${this.password}abc`

}

  user.prototype.changeUSerNAme = function(){
        return `${this.username.toUpperCase()}`
  }
const tea = new user("tea", "tea@gmial.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUSerNAme());
