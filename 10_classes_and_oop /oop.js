//An object literal is a way to create an object using a simple and direct syntax.
//username,loginCount,signedIn are Properties and getUserDetails is a method
//curly braces {} define the object literal.

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);




//A constructor function is a special function used to create multiple objects with the same structure and behavior (like a blueprint).
//The function starts with a capital letter (by convention).
//this refers to the new object being created.
//new keyword is used to create an instance.
//Each call to new Person() creates a new object.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);   o/p - [Function: user]

//new - It is a special keyword in JavaScript that is used to call constructor functions and create new object instances from them.
//Creates a new empty object:
//Sets this to point to the new object:
//Adds __proto__ (i.e., prototype chain):
//Returns the object

//The instanceof operator is used to check if an object is an instance of a specific constructor or class.
//So instanceof works only with objects, not primitives.