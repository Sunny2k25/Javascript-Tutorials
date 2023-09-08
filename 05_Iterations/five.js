const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

//Arrow function

// coding.forEach((item)=> {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

// coding.forEach((item, index, arr)=> {
//     console.log(item,index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "C++",
        languagefileName: "cpp"
    },
    {
        languageName: "python",
        languagefileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})