if(true){
    let a = 10
    const b = 50
    var c = 40
    console.log(a)
    console.log(b)
}

let a = 300
console.log(a)

function one(){
    const username = "nikita"

    function two(){
        const website = "youtube"
        console.log(username)

    }
    // console.log(website)
    // two()
}
one()


// ////////////////////////////////////////////////////////////web hoisting 

// neeceh vle m humne mylb jb v normal function bnate h toh fucntion ko phle access kr skte h function ko declare krne se 
addone(2)
function addone(num){
    return num + 1
}


/// neeche vale tarike m hum function ko call nhi kr skte h function ke declaration se phhle 

holdValues(3)
const holdValues = function addTwo(num){
    return num + 2
}  
