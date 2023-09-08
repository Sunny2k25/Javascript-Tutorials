const myNums = [1, 2, 3, 4];


// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc:- ${acc} and currval :- ${currval}`);
//     return acc+currval;
// }, 0)

// const myTotal = myNums.reduce( (acc,currval) => acc+currval)

// console.log(myTotal);

const shoppingKart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "py Course",
        price : 2499
    },
    {
        itemName : "c++ Course",
        price : 1999
    }
]

const priceTopay = shoppingKart.reduce( (acc,currval) => acc+currval.price,0)

console.log(priceTopay);
