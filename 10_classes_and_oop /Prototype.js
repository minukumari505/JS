// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}//This means every object in JavaScript (because everything inherits from Object) can now use the .hitesh() method.


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}//Now only arrays (like myHeros) can use .heyHitesh().

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()  give error

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User//Now Teacher has access to all properties of User via the prototype chain.__proto__ is old-style.



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
//Now TeachingSupport inherits from Teacher, which already inherits from User.


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}//Now any string can use .trueLength() — it removes spaces and shows the actual character count.

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()