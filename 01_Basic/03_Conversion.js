let score = true
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN not a number


//"33" => 33
//"33abc" => NaN
//true =>1 , false => 0

let isLoggedIn = "Minu";
let boooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(boooleanIsLoggedIn);

//1 => true ; 0 => false
//"" => false
// "Minu" => true

let somenumber = 33;

let stringnumber = String(somenumber);
console.log(stringnumber);
console.log(typeof stringnumber);

//*************************************** OPERATIONS ******************************************** 
let value = 3;
let negvalue = -value
console.log(negvalue);
// console.log(2**3)   output is 8 cube of 2

let str1 = "hello";
let str2 = " Minu"
let str3 = str1+str2;
console.log(str3);

console.log("1"+2);  //12
console.log(1+"2");  //12
console.log("1"+2+2); //122
console.log(1+2+"2");  //32

console.log(true)
console.log(+true)
console.log(+"")

let num1,num2,num3;
num1 = num2 = num3 = 2+2;

let gameconter = 100;
++gameconter
console.log(gameconter);