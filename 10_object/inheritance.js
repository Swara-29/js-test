class user {
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}

const chai =new teacher("chai", "chaia@gmail.com", "123")

chai.addCourse()

const masalachai = new user ("masalachai")

masalachai.logMe()

console.log(chai instanceof teacher);
console.log(teacher instanceof user);

