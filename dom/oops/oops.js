// object literals 
const user = {
    username : "nikita",
    loginCount : 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(`username : ${this.username}`)

    }
}

console.log(user.username)
console.log(user.getUserDetails())


// constructor function -> new ye ek constructor  ye aapko har baar new instance deta h 


/// 1 phle ek object create hoga , fir jo v humne likha h values vo this ke  andr store ho jyega , then hume mil jyega 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("nikita", 12, true)
const userTwo = new User("nikitasah", 11, false)
console.log(userOne.constructor);
console.log(userOne.greeting())
console.log(userTwo.greeting())
//console.log(userTwo);

