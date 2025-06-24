class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")/*Internally:Calls set email("h@hitesh.ai") → sets _email = "h@hitesh.ai"
Calls set password("abc") → sets _password = "abc"*/
console.log(hitesh.email);//This calls the getter: get email()  , Returns _email.toUpperCase()


/*When you do new User("h@hitesh.ai", "abc"), the constructor runs.
It does NOT directly assign values.
Instead, it calls the setter functions: set email(...) and set password(...).


    set password(value){
        this.password = value
    }
This would call the setter again, which would call itself forever — leading to a stack overflow (infinite loop).So we use a different name like _email to safely store the actual value.
*/