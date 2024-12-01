class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

   static createId(){
        return `123`
    }
}

const swara = new user ("swara")
//console.log(swara.createId())

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher ("iphone", "i@phone.com")
iphone.logMe()