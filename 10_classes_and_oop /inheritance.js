//A class is a blueprint for creating objects with shared properties and methods.
//This is the parent/base class.It defines a username property.It has a method logMe() that logs the username.
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}



//This is a child/subclass of User.It inherits everything from User.super(username) calls the constructor of the parent class.It adds its own properties (email, password) and method addCourse().
class Teacher extends User{
    constructor(username, email, password){
        super(username)//calls the constructor of User
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")//new Teacher(...) automatically calls the constructor.

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);//The instanceof operator checks whether an object belongs to a class or its parent class in the prototype chain. o/p is true