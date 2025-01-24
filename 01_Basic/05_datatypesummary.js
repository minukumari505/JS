// // Types of datatypes
// //Primitive
// //7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

// const score = 100
// const scorevalue = 100.3

// const isLoggedIn = false
// const outsidetemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34567891011121314n


// //Reference (Non-Primitive)
// //Array,Objects,Functions

// //JS is a dynamically typed language. Because data type will be automatically assigned at the time of compilation or code executions

// const heros = ["shaktiman","naagraj","doga"];
// //Object
// let myObj = {
//     name:"hitesh",
//     age: 22,
// }
// //Function
// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber)  //bigint
// console.log(typeof myFunction)//function
// console.log(typeof myObj)     //object
// console.log(typeof heros)     //object
// console.log(typeof anotherId) //symbol
// console.log(typeof id)      //symbol
// console.log(typeof outsidetemp)  //null is giving object datatype
// console.log(typeof isLoggedIn) //boolean
// console.log(typeof scorevalue) //number
// console.log(typeof userEmail)  //undefined

//************************************************************* */
//stack (primitive),Heap(Non- Primitive)
let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne;
userTwo.email = "hitesh@3.com"
console.log(userOne.email)
console.log(userTwo.email)
