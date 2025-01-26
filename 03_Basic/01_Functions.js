function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}
// sayMyName() execution
// sayMyName reference

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }
// addTwoNumber(3,"a")     =>   3a
// addTwoNumber(3,"4")     =>   34

function addTwoNumber(number1,number2){
    let result = number1+number2
    console.log("Hitesh")
    return result
    //once return is called then no other work done by function
}
const result = addTwoNumber(6,9)
// console.log("Result:", result)

function loginUserMessage(username){
    if(username === undefined){
     console.log("Please enter a username")
    }
    else{
        return `${username} just logged in`
    }
}
console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage())      => undefined just logged in

// function loginUserMessage(username = "sam"){
//     if(!username){
//      console.log("Please enter a username")
//     }
//     else{
//         return `${username} just logged in`
//     }
// }

function calculateCartPrice(){
    return nem
}