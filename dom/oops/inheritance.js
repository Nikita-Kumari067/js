class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  ////  ye username parent class se  le liya
        this.email = email
        this.password = password

    }

    teacherAddCourses(){
        console.log(`a new course is added ${this.username}`)

    }
}

const chai = new Teacher("nikita", "nikita45@gmail.com", "tabular")

chai.teacherAddCourses()
chai.logMe()

const data = new User("nikita")

// data.teacherAddCourses()   // not access by parent 
data.logMe()


