//primitive data types
//call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;


//how to declare Symbol
// const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id == anotherId)

const bigNumber = 3456789101212232n


//Javascript is dynamically typed language



// Reference type(Non primitive)

// Array, Objects, Functions


// Array
const heros = ["shaktiman", "naagraj", "doga"]

//Objects
let myObj = {
    name : "Sunny",
    age : 20,
}

//Functions
const myFunction =function () {
    console.log("hello world");
}

//console.log(typeof anotherId);

//typeof val
// If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint".

//Stack (primitive), Heap(Non- primitive)

let myYoutubename = "Sunnyjaiswal"

let anothername = myYoutubename;
anothername = "mydesign";

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email ="usertwo@gmail.com";

console.log(userOne.email);

console.log(userTwo.email);