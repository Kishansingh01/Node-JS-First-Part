
// COMMON JS MODULE WRITING METHODS

// var x="Hello world";
// var m="Market world";
// var z="RAM RAm";

// function calculateSum(a,b){
//    const sum= a+b;
//    console.log(sum)
// }
// // console.log(module.exports) // It is empty objects
// // module.exports= {
// //    // x:x,
// //    // calculateSum:calculateSum,
// //    // m:m,
// //    x,m,calculateSum
// // };



// 2ND METHOD OF WRITING COMMON JS MODULE

var x="Hello world";
var m="Market world";
var z="RAM RAm";

function calculateSum(a,b){
   const sum= a+b;
   console.log(sum)
}
// console.log(module.exports) // It is empty objects

module.exports.x=x;
module.exports.calculateSum=calculateSum;
module.exports.m=m;