// promises creation
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('async task is completed')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise consumed ')

})

// method 2 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task  2 ")
        resolve()
    }, 1000)
}).then(function(){
    console.log("async2 task is resolved")
})

//method 3 
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "nikita", email: "nikit34@gmail.com"})
    }, 1000)
})
promisethree.then(function(user){
    console.log(user)
})

// 4th promise 

const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let  error = false
        if(!error){
            resolve ({username: "hitesh", passowrd: "123"})
        }else{
            reject('ERROR: something went wrong')
        }

    }, 1000)

})

const userName = promise4.then((user)=>{
    console.log(user)
    return user.username

}).then((myusername)=>{
    console.log(myusername)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected ")
})


// promise 5

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
    if (!error){
            resolve ({username: "hitesh", passowrd: "123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

async function consumePromiseive(){
    try {
         const response = await promisefive
             console.log(response);
        
    } catch (error) {
        console.log(error)
    }
   

}
consumePromiseive()



/////////  

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/Nikita-Appfoster')
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }

}
getAllUsers()





/////////////////////////////// most impppp//////
fetch('https://api.github.com/users/hiteshchaudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
