// if 
const number = 50

if (number >5){
    console.log("greater")
}
else{
    console.log("not greater")
}

/// nested if else  if 
const balance = 1000
if(balance < 500){
console.log("lss than 500")
}
else if (balance <900){
    console.log("less than 750")
}
else{
    console.log("les than 1200")
}



const userLoggedIn = true 
const debitcard = true 
const loggedInfromGoogle = false
const loggedinfromemail = true

if(userLoggedIn && debitcard){
    console.log("allow to buy course")
}

if(loggedInfromGoogle || loggedinfromemail){
    console.log(" you can log in")
}

const mont =3

switch (mont){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 12:
        console.log("december")
        break;

    default:
        console.log("default case match")
        break;
}
