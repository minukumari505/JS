// Immediately Invoked Function Expressions (IIFE)
 //to remove the pollution of global scope we use the IIFE(also for immideate execution of function)


// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()
(function chai(){
    //named IIFE
    console.log('DB CONNECTED');
})();  //here ; is important for stoping the first

// (() =>{
//     console.log('DB CONNECTED TWO');
// })() 

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh') 
