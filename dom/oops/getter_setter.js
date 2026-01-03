class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase() /// isme humesha return krta h 
    }
    set email(value){
        this._email = value    ////// set ko kbhi return nhi krte h 
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value

    }
    
}

const nikita = new User("nikita@ai.com", "nikiat@123")

console.log(nikita.password)
