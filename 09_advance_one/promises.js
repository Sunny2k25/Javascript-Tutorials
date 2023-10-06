const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is Complete');
        resolve()
    },1000)

});

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 2 task is completed');
        resolve()
    },1000)


}).then(function(){
    console.log("Promise 2 Consumed");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Chai", email : "chai@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "sunny", email: "jaiswal@gmail.com"})
        }else{
            reject('ERROR : Something went Wrong')
        }
    },1000)
})

// const username1 = promiseFour.then((user) =>{
//     console.log(user);
//     return user.username;

// })

// console.log(username1);

promiseFour
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() =>{
    console.log("The Promise is either resolved or rejected");
})


// Promise ko Accept karne ka en tarika yeh hain apan isse .then and .catch se accept karte hain
/*aur dusra tarika hota hain isse apan async fuction se handle kare yeh 
wait karta hain kaam ko complete hone ka phir code execute hota hain
*/

const promisefive  = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR : JS went Wrong')
        }
    },1000)


});

async function consumePromiseFive(){
        // const response = await promisefive() promise object hain toh isse iss tarah consume nahi kartes

 try{
    const response = await promisefive
    console.log(response);
 }
 catch(error){
    console.log(error);
 }
}

consumePromiseFive()

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() 
//     // yeh response.json hain yeh bhi kaam karne me time lagata hain isliye apan await function use karte hain
//     console.log(data)
//    } catch (error) {
//     console.log("E :", error);
    
//    }
// }


// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})