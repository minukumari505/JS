// const tinderuser = new Object()
const tinderUser = {}
console.log(tinderUser)
tinderUser.id = "123456bn"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3)
// console.log(obj1)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email: "h@gmail.com",
    },
    {
        id : 12,
        email: "hi@gmail.com",
    },
    {
        id : 13,
        email: "hit@gmail.com",
    },
    {
        id : 14,
        email: "hite@gmail.com",
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}
//course.courseInstructor

 const {courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor:Instructor} = course
console.log(Instructor);


// const navbar = ({company}) => {

// }                                 **** Destructure of react
// navbar(company = "hitesh")


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",         //JSON => keys and value both are string here
//     "price": "free"
// }

[
    {},
    {},              //JSON format
    {},
]

