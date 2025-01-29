//if
//  === type of datatype is check by this operator
const isUserloggedIn = true
const temperature = 41
if(temperature<50){
  //  console.log("less than 50")
}
else{ 
    console.log("temperature is greater than 50");
}

const score = 200

if(score>100){
    const power = "fly"
    // console.log(`user power: ${power}`);
    // if var use as datatype then we can access local variable as a global variable (not a good experience)
}
// console.log(`user power: ${power}`);

const balance = 1000
// if(balance>500) console.log("test"),console.log("test2");  not a good practice

// if(balance<500){
//   console.log("less than");
// }else if(balance <750){
//    console.log("less than 750")
// }else if(balance < 900){
//   console.log("less than 900")
// }else {
//   console.log("less than 1200")
// }

const UserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserloggedIn && debitcard){
  console.log("Allow to buy course"); 
}
if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in");  
}
