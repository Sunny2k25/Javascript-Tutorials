//this keyword
//->current context ke bare me batata hain

const user ={
    username : "Sunny",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "Nishank"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()

const chai = () =>{
    let username = "hitesh"
    console.log(this);
}

// chai()


//Explicit Return
// const addtwo = (num1,num2) => {
//      return num1 + num2; 
// }

//Implicit Return
//const addtwo = (num1,num2) => num1 + num2; 
// const addtwo = (num1,num2) => (num1 + num2); 
const addtwo = (num1,num2) => ({
    username: "Sunny"
}) 


console.log(addtwo(3,4));



 