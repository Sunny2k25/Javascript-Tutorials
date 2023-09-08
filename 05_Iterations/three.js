// for of

// ["", "", ""]
// [{}, {}, {}].  // array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello World";

for (const greet of greetings) {
    //console.log(greet);
}


//Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();

map.set('IN',"India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN',"India");   //Map Unique value leta hain

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
// }
//Object pe apan forof loop ka use nahi kar sakte