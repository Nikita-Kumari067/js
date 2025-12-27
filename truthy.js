const userEmail = "h34@gmail.com"
 if (userEmail){
    console.log("got user email")
 } else{
    console.log("dont have user email")
 }
const userEmail2= ""
 if (userEmail2){
    console.log("got user email")
 } else{
    console.log("dont have user email")
 }



 // flasy values 
 //false, 0, -0, bigInt, "", null , undefined , NAN, 0n

 // truthy values
 //"0", 'false, " " , [], {}, function(){}

 // to check is array is empty 
 const userEmail3=[]

 if (userEmail3.length ===0){
    console.log("array is empty")
 }

 // to check is object is empty

 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0){

    console.log("object is empty")
    
 }


////////////// Nullish coalescing opeartor (??) : null undefined

 let val1;
 val1 = 5 ?? 10
console.log(val1)

 let val2;
 val2 = null ?? 100
 console.log(val2)


 //////////////////////// terniary operator//////////

 condition ? true : false 

 const iceprice = 100
 iceprice <= 80 ?console.log("less than 80") : console.log("more than 80")



