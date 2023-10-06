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
