function SayMyname() {
    console.log("S");
    console.log("U");
    console.log("N");
    console.log("N");
    console.log("Y");

}

// SayMyname()

function addTwoNum(number1,number2) {
    // console.log(number1+number2);
    const Result = number1 + number2;
    return Result;
    
}

const Result = addTwoNum(5,6)



//console.log("Result" , Result);


function Loginuser(username) {
    if (!username) {
        console.log("Please enter your username");
        return;
        
    }
    return `${username} just logged in`
}

//const name = Loginuser("Sunny")
//console.log(name);

// console.log(Loginuser());


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400));

const user ={
    username : "sunny",
    prices : 200,

}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleobject(user)

handleobject({
    username : "sunny",
    price: 400
})



const mynewArr = [200,400,600,800];

function returnSecondValue(getArray){
    return getArray[1];

}

//console.log(returnSecondValue(mynewArr));

console.log(returnSecondValue([200,400,600]));