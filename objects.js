// singleton  -> Object.create()

//object literals 
const mysym = Symbol("mykey1")

const jsuser = {
    name: "Nikita",
    "full name" : "nikita sah",
    [mysym]: "mykey1",
    age: 19,
    location: "Delhi",
    email: "nikita43@gmail.com",
    isloggedin:false,
    lastloginDays: ["mon", "tue"]

}
console.log(jsuser.name)
console.log(jsuser["name"])
console.log(jsuser["full name"])
console.log(jsuser)

jsuser.email = 'nikita54@gmail.com'
console.log(jsuser)
// Object.freeze(jsuser)  // it  freezes the object value 
jsuser.location = "south delhi"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello user")
}
jsuser.greeting2 = function(){
    console.log(`hello user, ${jsuser["full name"]}`)
}


console.log(jsuser.greeting())
console.log(jsuser.greeting2())





const tinderUser = new Object() // singleton object 
tinderUser.id = "123abc"
tinderUser.name = "nikita"

console.log(tinderUser)


const regularUser= {
    email: "sum@gmail.com",
    fullname: {
        userfullname:{
            firstname: "nikita",
            lastname: "sah"
        }
    }
}
console.log(regularUser)
console.log(regularUser.email)
console.log(regularUser.fullname.userfullname.firstname)

// to combine object 

const  obj1 = {
    1:"a",
    2 : "b",
}
const  obj2 = {
    3: "c",
    4 :"d"
}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

// or we can also us e spread operator 

const obj4 = {...obj1, ...obj2}
console.log(obj4)

const cars = [
  { make: "Toyota", 
    model: "Corolla", 
    year: 2022 },

  { make: "Tesla",
     model: "Model 3", 
     year: 2021 },

  { make: "Ford", 
    model: "Mustang",
     year: 1969 }
]
 console.log(cars[1].year)

console.log(Object.keys(tinderUser))  // ye jo h ek array return krta h 

console.log(Object.values(tinderUser))  // ye jo h ek array return krta h 

console.log(Object.entries(tinderUser))  // ye jo h ek array return krta h 

console.log(tinderUser.hasOwnProperty('id'))  // ye jo h ek array return krta h 

// destructring of object



const course ={
    coursename : "js",
    price : "999",
    teacher: "nikita"
}
const { coursename} = course
console.log(coursename)

const { coursename: name} = course
console.log(name)