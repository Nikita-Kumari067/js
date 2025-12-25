let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

let myDate1 = new Date(2023, 0, 23) //yyy-mm-dd
console.log(myDate1.toString())

let timestamp = Date.now()  /// ye timestamp batata hai millisecond m
console.log (Math.floor(timestamp / 1000))   // it converts into sec

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

///

newDate.toLocaleString('default', {
    weekday: "long",

})
