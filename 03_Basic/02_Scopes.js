// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    //  c = 30
    // console.log("Inner a is:", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youTube"
        // console.log(username);
    }
    // console.log(website);

    two()

}

one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youTube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);

// *************************interesting************************************

console.log(addone(5))  //it is true it will not give any error(normal function declaration)
function addone(num){
    return num+1;
}
// addone(5)

// addTwo(5)    //it will give error because (we hold function in a variables after declaration)
const addTwo = function(num){
    return num+2
}
// addTwo(5)