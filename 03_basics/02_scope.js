// let a = 10
// const b = 20
// var c = 30

var c= 300. //global scope

let a = 40

if(true){
    //block scope
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner value of a:", a);

}

console.log(a);
//console.log(b);
//console.log(c);