// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
// console.log(`${this.username},welcome to website`) // this:current contest ko refer karta h
// console.log(this)
//     }

// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)  //returns global object here global object is {} , in case of website global object is  window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function chai(){
//     let username = "hitesh"
//     console.log(this.username);      //function me this use nahi kar sakte ,object me kar sakte h
// }
// chai()

const chai = () => {             //arrow function ,here also we are not able to use this
         let username = "hitesh"
         console.log(this.username);
     }
    //  chai()

    // const addtwo = (num1,num2) => {
    //     return num1+num2         //explicitive return (return is used)
    // }
    // const addtwo = (num1,num2) =>  num1+num2   // implicitive return
    // const addtwo = (num1,num2) =>  (num1+num2) //{} then we had to use return ,() not require
    const addtwo = (num1,num2) => ( {username:"hitesh"})
    console.log(addtwo(4,9))

    // const myarray = [2,5,3,7,8]
    // myarray.forEach()