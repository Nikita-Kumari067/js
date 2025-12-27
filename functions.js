function sayMyName(){
    console.log('nikiota')
}

sayMyName()

// function to add two numbers 

function addTwoNum(n1, n2) // n1 & n2 are parameters 
{
    console.log(n1+n2) 
}

addTwoNum(4,5)  // 4 & 5 are arguments


function loginUserMessage(username ="sam"){
    if (!username) {
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}

const result = loginUserMessage()
console.log(result)



/// when we dont the actual number of arguments 

function calculateCartPrice(...num1) // rest operator  
{
    return num1

}
console.log(calculateCartPrice(200, 400, 500))


const user ={
    name: "nikita",
    price: "200"
}

function handleObject(anyobject){
    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray =[200, 100, 400, 600]

function secondValue(getArray){
    return getArray[1]
       
}

console.log(secondValue(myNewArray))







