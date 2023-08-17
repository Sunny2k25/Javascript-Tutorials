//Immediately Invoked Function Expression (IIFE)

// Global Scope me jo bhi variable hote hain unki wajah se jo bhi pollution hiota hain usse hm IIFE Function kehte hain

//()()

(function Chai(){
    console.log(`DB CONNENCTED`);
})();


//Unnamed IIFY  
// ( function aurCode() {
//     console.log(`DB CONNECTED TWO`);
// })() ;


//named IIFY 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')