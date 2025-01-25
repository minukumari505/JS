//singleton (constructor - singleton) (literal - not a singleton)
//Object.create   (constructor method , here singleton form)

//Object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Chaudhary",   //you cannot access this by .(dot)
   [mySym]:"mykey1",
    age: 18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@689u.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@68009u.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());