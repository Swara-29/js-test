//const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123dfg"
// tinderUser.name = "Sam"
// tinderUser.isloggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "sdce@dcrk.com",
//     fullname: {
//         userfullname:{
//             firstname: "swara",
//             lastname: "pudke"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const iser = [
    {

}]

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"swara"
}
const {courseInstructor: instructor} = course
console.log(courseInstructor);

