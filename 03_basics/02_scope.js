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
    //console.log("Inner value of a:", a);

}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "Sunny"


    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()


if (true) {
    const username = "Sunny"
    if(username === "Sunny")
    {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// ++++++++++++++ Intresting +++++++++++++

// console.log(addone(5));
function addone(num){
    return num+1;


}



const addTwo = function(num){
    return num+2;
}
addTwo(5)
