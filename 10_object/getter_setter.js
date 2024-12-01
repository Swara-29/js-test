class user {
    constructor(email, password){
    this.email = email;
    this.password = password
}

get email(){
    // return this._password.toUpperCase()
    return this._email.toUpperCase()

}
set email(value){
     this._email = value
}

    get password(){
        // return this._password.toUpperCase()
        return ` ${this._password} SWara`
}

    set password(value){
        this._password = value

    }
}

const SWara = new user("swara@gmial.com", "acgh123")
    console.log(SWara.password);
    console.log(SWara.email);
