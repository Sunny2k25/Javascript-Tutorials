const userEmail =  []
if(userEmail)
{
    console.log("Got User email");
}else{
    console.log("Don't have user email");
}

//false values

//false, 0, -0, BigInt, "", null, undefined, NaN

//Truthy Values

// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is Empty");   //Agar User Email ke ander Array likh rakha ho toh apan use aise use karte hain
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is Empty");
}

