const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObject) {
   //console.log(`${key} shortcut for ${myObject[key]}`);
   //console.log(`${myObject[key]}`);
   //console.log(key);
}

const programming = ["js","rb", "py", "java", "cpp"]

for (const key in programming) {
   //console.log(key);
}

const map = new Map();

map.set('IN',"India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN',"India");   //Map Unique value leta hain

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-', value);
    
}
//map me for in loop nahi iterable hota hain

for (const key in map) {
  console.log(key);
}