(function chai (){

    // named iifi 
    console.log(`db connected`)
})();

// bahut bar global variable se pllute ho jta h isliye lgate h  iifi 
 
( (name) =>{
    // unnamed iifi 
    console.log(`cnnceted ${name}`)
}

)("kita")