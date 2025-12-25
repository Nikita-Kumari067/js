//array

const myArr = [0, 1, 2, 3, 4, 5, true, "nikita"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[3])

// array methods 

myArr.push(9)    // ye last m add krta h 
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(4)  // start m add ho jta h but ye use nhi krte h due to optimizaation 
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(8))

const newArr = myArr.join()   /// ye .join convert kr deta string m 
console.log(myArr)
console.log(newArr)

// slice, splice 

console.log("A ", myArr)
// to merge two arrays 
const arr1=[1,2,3,4,5]
const arr2= [6,7,8,9,10]

// const numbers = arr1.concat(arr2)
// console.log(numbers)

//spread operator
const numbers = [...arr1, ...arr2]
console.log(numbers)

const antharray = [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12], [13, 14, 15, 16]]

const real_another_array = antharray.flat(Infinity)
console.log(real_another_array) /// flat sbko ek saath kr deta ek hi array m 

console.log(Array.isArray("nikita"))
console.log(Array.from("nikita"))   // it converts it into array






