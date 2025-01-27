const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
console.log(`${this.username},welcome to website`) // this:current contest ko refer karta h
console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)  //returns global object here global object is {} , in case of website global object is  window

function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai()

// const chai = function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
         let username = "hitesh"
         console.log(this.username);
     }
     chai()