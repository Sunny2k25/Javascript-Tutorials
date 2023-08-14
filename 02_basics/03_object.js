//Object ko dclare karne ke 2 tarike hain
/*
1.Literals ki Tarah
2.Constructor ki tarah
Singelton _ Jab bhi hm literals  ki tarah declare karte hain  toh singelton nahi bnata hain
 baki constructor se banega toh singelton banega
*/

//Object Literals
// Object.create

//object me keys aur values ka chakkar hota hain

const mySymbol = Symbol("key1");


const jsuser ={
    name : "Sunny",

    "full name" : "Sunny Jaiswal", // isko hm . se access nahi ka sakte 
    [mySymbol] : "mykey1",
    age : 18,
    location: "Bihar",
    email : "sunny@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);

// console.log(jsuser["full name"]); //aise nahi use kar sakte

// console.log(jsuser.mySymbol);

// console.log( typeof jsuser[mySymbol]);

// console.log(jsuser[mySymbol]);

jsuser.email = "sunny@chatgpt.com"

//Object.freeze(jsuser);

jsuser.email = "sunny@microsoft.com"
//console.log(jsuser);



jsuser.greeting = function(){
    console.log("Hello Js user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}


console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());