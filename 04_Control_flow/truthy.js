//empty array->true , empty string-> false , 
const useremail = "hitesh@134.com"

if(useremail){
    // console.log("GOT user email");
}else {
    console.log("Don't have user email");
}

//fasy values
// false,0, -0, BigInt 0n, "" ,null ,undefined, NaN
//truthy values
//"0",'false'," ",[],{},function(){}

const Arr = []
if (Arr.lenght === 0) {
    console.log("Array is empty");
// }else{console.log("chai");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined??15
val1 = null ?? 10 ?? 20


console.log(val1);

//Terniary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
