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

const promisefive  = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR : JS went Wrong')
        }
    },1000)


});

async function consumePromiseFive(){
    const response = await promisefive
    console.log(response);
}

consumePromiseFive()