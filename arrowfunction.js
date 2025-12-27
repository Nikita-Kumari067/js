const user = {
    username : "nikita",
    price : 999,
    welcomeMessage : function(){
        console.log(`welcome to website, ${this.username}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// this jo h object ke andr kaam krta h functionnke andr nhi 
console.log(this)


// function chai(){
//     let username = "nikita"
//     console.log(this.username)
// }
// chai()
// yha pe v this se access ko nhi kr pyenge 
// const chai = function nikita2 (){
//     let username = "nikita"
//     console.log(this.username)
// }
// chai()


////////////////////////////////////////////////////////////////////////////////////////////////arroe function///////////////////////////////// ism ev this se access nhi kr skte h 
// const chai = () => {
//     let username = "nikita"
//     console.log(this)
// }
// chai()

const addTwo = (n1, n2) =>{
        return n1 + n2
}
console.log(addTwo)

//// implicitly return kr dega 
const addTwo3 = () => n1+ n2
// curly braces likheneg toh return likhna pdega but parantheeseis lgane s enhi lgate h

const addTwo4 = () => (n1+ n2)
// to return object
const obje1 = ()=>({user : "nikita"})




