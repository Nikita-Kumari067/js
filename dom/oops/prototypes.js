let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()   


// inheritance 

const User = {
    name : "new"

}

const teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false 

}

const TASupport = {
    makeAssignment: ' JS assignemt',
    fullTime : true,
    __proto__: TeachingSupport
}
teacher.__proto__ = User



///////////// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)   /// teachingsupport ko chaiye tha teacher ka sb kch  , jisko chaiye hota h vo phle hota h


let anotherUsername = "chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
 

    console.log(`truelength is ${this.trim().length}`)
}
anotherUsername.trueLength()
"nikita".trueLength()
