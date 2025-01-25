// //Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate);

// // let myCreatedDate = new Date(2025,0,23)

// // let myCreatedDate = new Date(2025,0,23,5,3)
// // let myCreatedDate = new Date("2025-01-25")
// let myCreatedDate = new Date("01-25-2025")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //give millisecond value from 1 jan 1970
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());     //console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time is 3:10`)

newDate.toLocaleString('default',{ 
    weekday: "long",
    // timeZone: ''

})
console.log(newDate.toString('default'));


