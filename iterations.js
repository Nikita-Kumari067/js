//for

//  for (let i = 0; i <10; i++){
//     const element = i;
//     if (element==5){
//         console.log("5 is best number")
//     }
//     console.log(element)
    
//  }



for (let index = 1; index <=10; index++){
    console.log(`outer loop ${index}`)
    for(let j =1; j<=10 ; j++){
    //   console.log(`inner loop value ${j} and inner loop ${index}`)
      console.log(index + '*' +j + '='  +index*j)
        
    }
    
}

let myArr = [1,2,3,5,7,8,"flashman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
    
}


// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index==5){
//         console.log(`5 is detected`);
//         break
        
//     }
//     console.log(`value of i is ${index}`)
    
// }
// for (let index = 1; index <= 20; index++) {
//     if (index==5){
//         console.log(`5 is detected`);
//         continue
        
//     }
//     console.log(`value of i is ${index}`)
    
// }

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`)
//     index = index +2 
    
// }

let array3 = [1,2,3,5,6,7]

let arr = 0
while (arr < array3.length) {
    console.log(`value is ${array3[arr]}`)
    arr = arr+1
}



/////////////// do while

let score = 1
do {
    console.log(`score is ${score}`)
    score++
    
} while (score <=10);

let score2 = 11
do {
    console.log(`score is ${score2}`)
    score++
    
} while (score2 <=10);






////////////////////////////////array pe loop lgana /////

/// 1 for of loop

const arr23 = [1,2,3,4,5,6]
for (const value of arr23) {
    console.log(value)
}

const greeting = "Hello World"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
    
}

// Maps 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// console.log(map)
// for (const [key, value] of map) {
//     console.log(key, ":" ,value)
    
// }


/////////////// for of does not work for object
// const myObject ={
//     game : "NFS",
//     game2 : "spiderman"
// }
// for (const [key, value] of myObject) {
//     console.log(key, ":" ,value)
    
// }



const myObject2 = {

    js: "javascript",
    cpp: "c++",
    rb: "ruby",
}

for (const key in myObject2) {

    console.log(`${key} shortcut is for ${myObject2[key]}`)
    
}

////////////// for each loop

const coding =["ruby", "js", "java", "cpp"]
// coding.forEach((item)=>{
//        console.log(item);
       
// })

// function printMe(item){
//     console.log(item)

// }
// coding.forEach(printMe)

coding.forEach((item, index ,arr)=>{
    console.log(item, index, arr)

})

////////////////////////////////// for each array of object //////
const myCoding =[
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "c++",
        fileName: "cpp"
    },
    {
        languageName: "Python",
        fileName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
        
})

/////////////////////////filter ////////////
const myNums = [1,2,3,4,5,6,7]

const newNums = myNums.filter((num)=>{
    return num>4

})
console.log(newNums)

/////////////map///////////


const myNumbers =[1,2,3,4,5,6,7,8,9,10]

// // const newNumbers = myNumbers.map((num)=>{
// //     return num + 10

// })
const newNumss = myNumbers
                .map((num)=> num*10)
                .map((num)=>{
                    return num + 1
                })
                .filter((num)=>{
                    return num>=40

                })

console.log(newNumss)

////////////////////////////////////////reduce/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const myNumbers23 = [1,2,3,4]
// const myTotal = myNumbers23.reduce(function(acc, currval){
//     return acc + currval 

// }, 0)

// console.log(myTotal)

const myTotal = myNumbers23.reduce((acc, curr)=>acc + curr, 0)

console.log(myTotal)


const shoppingCart =[
    {
        itemName: "js course",
        price: 2999

    },
    {
        itemName: "c++ course",
        price: 3000

    },
    {
        itemName: " python course",
        price: 4000

    },
]

const price = shoppingCart.reduce((acc, item)=> item.price + acc, 0)

console.log(price)








