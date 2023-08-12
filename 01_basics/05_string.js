const name = "sunny";
const repoCount = 50;


// console.log(name + repoCount + "value");

//string interpolation
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)


const gameName = new String("sunnyjaiswal-sj");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('N'));
// console.log(gameName.length);
// console.log(gameName.toLowerCase());


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4,4);
console.log(anotherString);


const newStringone = "    sunny  ";
console.log(newStringone);

console.log(newStringone.trim());

const url = "https://sunny.com/sunny%20jaiswal"

console.log(url.replace('%20','-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));