function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //this refers to the object that is currently calling the function.Use call() to explicitly set this when invoking a function.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

/*new createUser(...)
This creates a new empty object.
Sets this inside createUser to that object.
createUser function executes.
Inside createUser, you call:
SetUsername.call(this, username)
This line:
Calls the SetUsername function.
Manually sets this to the new object created by new createUser(...).
Inside SetUsername, this.username = username assigns the property.*/