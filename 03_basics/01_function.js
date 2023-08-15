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

console.log(Loginuser());