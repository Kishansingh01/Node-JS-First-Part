const fs=require("fs");
// const { fileURLToPath } = require("url");
const a=100;

setImmediate(()=>console.log("Set Immediate"));

Promise.resolve("Promise").then(console.log); 

fs.readFile("./file.txt","utf8",()=>{
    console.log("File reading CB");
});

setTimeout(()=>console.log("Time Expired"),0);

process.nextTick(()=>console.log("Process.nextTick"));

function printA(){
    console.log("a=",a);
}
printA();
console.log("Last Line of the file");


// last line of the file 

// next tick 
// inner next tick 

// Promise 
// Time expired
// set immediate 
// File reading CB 

