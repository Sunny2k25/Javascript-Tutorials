// const tinderuser = new Object() //yeh ek singelton object hain
const tinderuser ={} //yeh ek non singelton object hain


tinderuser.id = "123abc"
tinderuser.name = "sunny"
tinderuser.isLoggedIn = false


// console.log(tinderuser)

const regularuser ={
    email : "some@gmail.com",
    fullname: {
        userfullname :{
            firstName : "Sunny",
            lastname : "Jaiswal",
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}



//const obj3 = {obj1 ,obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "sunnyjaiswal@gmail.com",
    },
    {
        id1: 1,
        email2: "sunnyjaiswal@gmail.com",
    },
    {
        id2: 1,
        email2: "sunnyjaiswal@gmail.com",
    },
]

users[1].email

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogged'))


//Basically Apna Object Ki Destructuring ke baare me jannenge waise destructuring array ki bhi hoti hain

const course ={
    coursename : "Js in Hindi",
    courseprice : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} =course

console.log(instructor);

// const navbar =({}) =>{

// }
// navbar(company ="hitesh")

//Jab bhi koi apan kaam ki ke shar pe daal dena pade usse API kehte hain 


// {
//     "coursename" : "Js in Hindi",
//     "courseprice" : "999",
//     "courseInstructor" : "Hitesh"
// }
 
[
    {},
    {},
    {}
]