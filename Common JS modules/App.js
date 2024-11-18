// // var c="Kishan Singh Rajput"
// // require("./xyz.js")
//  require("./xyz.js")
//  console.log("It is the Between App ")
//  require("./Sum.js")
//  console.log("It is the App ")
 
 
// // var a=10;
// // var b=20;
// // console.log(a+b)
// // console.log("This is the first file")  


// // console.log(global) //this is global over here

// //console.log(this) // It will print the empty objects

// // console.log(globalThis)
// // console.log(globalThis===global)

// function Calculator(a,b){
//     const sum=a+b;
//     console.log(sum)

// }


require("../Common JS modules/Sum.js");
// const obj= require("./Sum.js");
const {x,m,calculateSum}= require("../Common JS modules/Sum.js")
var a=1000;
var b=2000;
calculateSum(a,b);
// obj.calculateSum(100,200);
console.log(x)
console.log(m)

