//const {readFile} = require('fs');
const fs = require('fs');
console.log('started a first task');
//check the file path
fs.readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err);
    }
    console.log(result);
    console.log("Completed the first task");
},);

Promise.resolve().then(() =>{
    console.log('This is my micro task');
})

console.log('strating the next task');
