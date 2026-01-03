class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

const newUser = new User("nikita")
// console.log(newUser.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i34@.com")
console.log(iphone.logMe())

