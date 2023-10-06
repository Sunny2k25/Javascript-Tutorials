// const user = {
//     username : "sunny",
//     login : 8,
//     singedIn : true,

//     getuserdetails: function(){
//         console.log("Got user details from database");
//         // console.log(`Username : ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(user.this);


function user(username, logincount, isLoggedIn )
{
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welocome to ${this.username}`);

    }


}

const userone = new user("hitesh", 10, true)
const userTwo = new user("Sunny", 12, false);
console.log(userone);
console.log(userTwo);