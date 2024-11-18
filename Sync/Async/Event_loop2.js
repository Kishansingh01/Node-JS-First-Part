// const fs=require("fs")
// setImmediate(()=> console.log("Set Immediate"));
// setTimeout(()=>console.log("Timer Expired"),0);
// Promise.resolve("Promise").then(console.log);

// fs.readFile("./file.text","utf8",()=>{
//     setTimeout(()=>console.log("2nd Timer"),0)
//     process.nextTick(()=>console.log("2nd next Tick"));
//     setImmediate(()=>console.log("2nd Immediate"));
//     console.log("file reading CB");
// })
// process.nextTick(()=>console.log("NextTick"));
// console.log("Last line of the file");

setTimeout(()=>console.log("Harsh has no girlfriend 1"),1000);
setTimeout(()=>console.log("Harsh has no girlfriend 2"),3000);
setTimeout(()=>console.log("Harsh has no girlfriend 3"),5000);
setTimeout(()=>console.log("Harsh has no girlfriend 4"),7000);
setTimeout(()=>console.log("Harsh has no girlfriend 5"),9000);
